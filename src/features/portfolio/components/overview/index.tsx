import { LanguagesIcon, MapPinIcon } from "lucide-react"

import { USER } from "@/features/portfolio/data/user"
import { getI18n } from "@/i18n/request"

import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"
import { EmailItem } from "./email-item"
import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item"
import { JobItem } from "./job-item"

export async function Overview() {
  const { dictionary, t } = await getI18n()
  return (
    <Panel>
      <h2 className="sr-only">{t.overview}</h2>
      <PanelContent className="space-y-3">
        {USER.jobs.map((job) => (
          <JobItem
            key={job.company}
            {...job}
            title={dictionary.positions["reach-ai:1"]?.title || job.title}
          />
        ))}
        {USER.email && <EmailItem email={USER.email} />}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon aria-hidden="true" />
            </IntroItemIcon>
            <IntroItemContent>{dictionary.profile.location}</IntroItemContent>
          </IntroItem>
          <CurrentLocalTimeItem timeZone={USER.timeZone} />
        </div>
        <IntroItem>
          <IntroItemIcon>
            <LanguagesIcon aria-hidden="true" />
          </IntroItemIcon>
          <IntroItemContent>{t.languages}</IntroItemContent>
        </IntroItem>
      </PanelContent>
    </Panel>
  )
}
