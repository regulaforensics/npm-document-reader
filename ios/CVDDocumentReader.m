#import "CVDDocumentReader.h"

@implementation CVDDocumentReader

static NSMutableDictionary<NSString*, NSString*>* _eventCallbackIds = nil;
- (NSMutableDictionary<NSString*, NSString*>*)eventCallbackIds {
    if (_eventCallbackIds == nil) _eventCallbackIds = @{}.mutableCopy;
    return _eventCallbackIds;
}

UIViewController*(^RGLWRootViewController)(void) = ^UIViewController*(){
    for (UIWindow *window in UIApplication.sharedApplication.windows)
        if (window.isKeyWindow)
            return window.rootViewController;
    return nil;
};

- (void) exec:(CDVInvokedUrlCommand*)command {
    NSString* method = command.arguments[0];
    NSMutableArray* args = [NSMutableArray new];
    for (int i = 1; i < command.arguments.count; i++) [args addObject:command.arguments[i]];
    if ([method isEqualToString:@"setEvent"]) {
        self.eventCallbackIds[args[0]] = command.callbackId;
        return;
    }
    
    RGLWEventSender sendEvent = ^(NSString* callbackId, id data) {
        NSString* eventId = [self.eventCallbackIds objectForKey:callbackId];
        if(eventId) callbackId = eventId;
        data = [RGLWJSONConstructor toSendable:data];
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
        [result setKeepCallbackAsBool:YES];
        [self.commandDelegate sendPluginResult:result callbackId:callbackId];
    };
    
    [RGLWMain methodCall:method :args :^(id data) { sendEvent(command.callbackId, data); } :sendEvent];
}

@end
