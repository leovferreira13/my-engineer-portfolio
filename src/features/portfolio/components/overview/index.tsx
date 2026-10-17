import { USER } from "@/features/portfolio/data/user"

import { Panel, PanelContent } from "../panel"
import { EmailItem } from "./email-item"
import { JobItem } from "./job-item"

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Contact and current work</h2>
      <PanelContent className="space-y-3">
        {USER.jobs.map((job) => (
          <JobItem key={job.company} {...job} />
        ))}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {USER.email && <EmailItem email={USER.email} />}
          <span className="text-sm text-muted-foreground">UTC−3 · Remote</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Portuguese (native) · English (fluent)
        </p>
      </PanelContent>
    </Panel>
  )
}
