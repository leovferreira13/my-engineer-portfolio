import { JournalPreview } from "@/features/journal/components/journal-preview"
import { About } from "@/features/portfolio/components/about"
import { Awards } from "@/features/portfolio/components/awards"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import { localizePath } from "@/i18n/config"
import { localizedMetadata } from "@/i18n/metadata"
import { getI18n } from "@/i18n/request"

export function generateMetadata() {
  return localizedMetadata("profile")
}
export default async function Page() {
  const { locale, dictionary } = await getI18n()
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: USER.dateCreated,
    mainEntity: {
      "@type": "Person",
      name: `${USER.firstName} ${USER.lastName}`,
      jobTitle: USER.jobTitle,
      description: dictionary.profile.subtitle,
      url: `${USER.website}${localizePath("/", locale)}`,
      image: new URL(USER.avatar, USER.website).toString(),
      sameAs: [
        "https://www.linkedin.com/in/leonardo-v-ferreira",
        "https://github.com/leovferreira13",
      ],
    },
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto flex max-w-3xl flex-col gap-4 pb-8 *:[[id]]:scroll-mt-22">
        <ProfileHeader />
        <Overview />
        <SocialLinks />
        <About />
        <Experiences />
        <Projects />
        <TechStack />
        <Education />
        <Awards />
        <JournalPreview />
      </div>
    </>
  )
}
