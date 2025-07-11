#import "RNDocumentReader.h"

@implementation RNDocumentReader
RCT_EXPORT_MODULE();

static NSMutableArray<RCTResponseSenderBlock>* _firedCallbacks = nil;
- (NSMutableArray<RCTResponseSenderBlock>*)firedCallbacks {
    if (_firedCallbacks == nil) _firedCallbacks = @[].mutableCopy;
    return _firedCallbacks;
}

- (NSArray<NSString*>*)supportedEvents {
    return @[completionEvent,
             databaseProgressEvent,
             rfidOnProgressEvent,
             rfidOnChipDetectedEvent,
             rfidOnRetryReadChipEvent,
             paCertificateCompletionEvent,
             taCertificateCompletionEvent,
             taSignatureCompletionEvent,
             videoEncoderCompletionEvent,
             onCustomButtonTappedEvent];
}

static bool hasListeners;
- (void)startObserving { hasListeners = YES; }
- (void)stopObserving { hasListeners = NO; }

UIViewController*(^RGLWRootViewController)(void) = ^UIViewController*(){
    return RCTPresentedViewController();
};

RCT_EXPORT_METHOD(exec:(NSString*)method:(NSArray*)args:(RCTPromiseResolveBlock)resolve:(RCTPromiseRejectBlock)reject) {
    RGLWCallback callback = ^(id _Nullable data) {
        if ([self.firedCallbacks containsObject:resolve]) return;
        [self.firedCallbacks addObject:resolve];
        resolve([RGLWJSONConstructor toSendable:data]);
    };
    
    RGLWEventSender sendEvent = ^(NSString* event, id data) {
        dispatch_async(dispatch_get_main_queue(), ^{
            if (hasListeners) [self sendEventWithName:event body:[RGLWJSONConstructor toSendable:data]];
        });
    };
    
    [RGLWMain methodCall:method :args :callback :sendEvent];
}

@end
