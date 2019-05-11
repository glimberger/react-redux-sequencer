// @flow strict
export type Samples = {
  [sampleID: string]: Sample
}

export type Sample = {
  // primary key (UUIDv4)
  id: string,

  // original filename
  filename: string,

  url: string,

  // mime type
  type: string,

  label: string,

  // sample set
  group?: string
}
