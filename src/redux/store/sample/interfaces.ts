export interface ISamples {
  [sampleID: string]: ISample
}

export interface ISample {
  // primary key (UUIDv4)
  id: string

  // original filename
  filename: string

  url: string

  // mime type
  type: string

  label: string

  // sample set
  group?: string
}
