export interface Observation{
    resourceType: string,
    id: string,
    text?: Narrative,
    implicitRules?: string,
    language?: string,
    contained?: Resource,
    meta?: Meta,
    extension?: Extension[],
    modifierExtension?: Extension[],
    identifier?: Identifier[],
    basedOn?: string[],
    partOf?: string[],
    status: "registered" | "preliminary" | "final" | "amended",
    category?: CodeableConcept[],
    code: CodeableConcept,
    subject?: string,
    focus?: string[],
    encounter?: string,
    effectiveInstant?: string,
    issued?: string,
    performer?: string[],
    valueString?: string,
    dataAbsentReason?: CodeableConcept,
    interpretation?: CodeableConcept[],
    note?: Annotation[],
    bodySite?: CodeableConcept,
    method?: CodeableConcept,
    specimen?: string,
    device?: string,
    referenceRange?: ReferenceRange[]
    hasMember?: string[],
    derivedFrom?: string[],
    component: Component[]
}
export interface Extension{
    url?: string,
    value?: string,
}
export interface Narrative {
    status: string,
    div: string
}
export interface Identifier{
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: string
}
export interface CodeableConcept{
    coding?: Coding[],
    text?: String
}
export interface Annotation{
    time?: string,
    authorString?: string,
    text: string
}
export interface ReferenceRange{
    low?: SimpleQuantity,
    high?: SimpleQuantity,
    type?: CodeableConcept,
    appliesTo?: CodeableConcept[],
    age?: Range,
    text?: string
}
export interface Component{
    code: string,
    valueString?: string,
    dataAbsentReason?: CodeableConcept,
    interpretation?: CodeableConcept[]
}
export interface Meta{
    versionId?: string,
    lastUpdated?: string,
    source?: string,
    profile?: string[],
    security?: Coding[],
    tag?: Coding[]
}
export interface SimpleQuantity{
    value?: number,
    currency?: string
}
export interface Coding{
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}
export interface Period{
    start?: string,
    end?: string
}
export interface Range{
    low?: SimpleQuantity,
    high?: SimpleQuantity
}

export interface Resource {
    id?: String,
    meta?: Meta,
    implicitRules?: String,
    language?: String
}