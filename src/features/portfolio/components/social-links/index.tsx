import { SOCIAL_LINKS } from "../../data/social-links"
import { Panel } from "../panel"
import { SocialLinkItem } from "./social-link-item"

export function SocialLinks() {
  return (
    <Panel className="before:content-none after:content-none">
      <h2 className="sr-only">Social Links</h2>

      <div className="mx-auto w-full max-w-3xl">
        <div className="screen-line-top screen-line-bottom grid grid-cols-2 divide-x divide-line">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />
          })}
        </div>
      </div>
    </Panel>
  )
}
