export type ProjectType = {
  id: string,
  name: string,
  updatedAt: string,
  url?: string,
  year: number,
  imageCap: {
    url: string,
  },
  siteLogo: {
    url: string,
  },
  techStack: string[]
}