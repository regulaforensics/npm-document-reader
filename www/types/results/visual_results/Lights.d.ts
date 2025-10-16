/**
 * Enumeration contains a set of identifiers used for identifying the
 * document reader possibilities, specifying lighting schemes for scanning, etc.
 */
export declare enum Lights {
    /** Light off. */
    NONE = 0,
    /** General UV light scheme. */
    UV = 128,
    /** General white light scheme. */
    WHITE_FULL = 6,
    IR = 16777216,
    /** Upper/lower lighters of IR light scheme. */
    IR_TOP = 8,
    /** Side lighters of IR light scheme. */
    IR_SIDE = 16,
    /** Upper/lower and side lighters of IR light scheme. */
    IR_FULL = 24,
    /** OVD light for hologram visualization. */
    OVD = 67108864,
    /** Combined light for {@link WHITE_FULL} and {@link OVD}. */
    WHITE_FULL_OVD = 67108870
}
