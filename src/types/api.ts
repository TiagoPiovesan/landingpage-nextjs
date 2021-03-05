export type SocialLinks = {
  title: string
  url: string
}

export type AutorProps = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  description: string
  socialLinks: SocialLinks[]
}

export type TechIcon = {
  title: string
  icon: {
    name: string
    url: string
  }
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type Image = {
  url: string
  alternativeText: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type sectionTechProps = {
  title: string
  techIcons: TechIcon[] //Array Typescript
}

export type sectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type sectionModulesProps = {
  title: string
  modules: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

export type sectionAgendaProps = {
  title: string
  description: string
}

export type PrincingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: AutorProps[]
}

export type Review = {
  id: number
  name: string
  photo: {
    url: string
  }
  review: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  anwer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: sectionTechProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
  sectionAgenda: sectionAgendaProps
  princingBox: PrincingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
