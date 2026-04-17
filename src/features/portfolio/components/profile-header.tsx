import { USER } from "@/features/portfolio/data/user"
import { TextFlip } from "@/registry/components/text-flip"

import { AvatarElectricEffect } from "./avatar-electric-effect"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="flex overflow-hidden rounded-b-xl rounded-t-none bg-background text-card-foreground shadow-xs ring-1 ring-border">
      <div className="shrink-0">
        <div className="mx-0.5 my-0.75">
          <AvatarElectricEffect>
            <img
              id="js-cover-mark"
              className="size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
              alt="Avatar"
              src={USER.avatar}
              fetchPriority="high"
            />
          </AvatarElectricEffect>
        </div>
      </div>

      <div className="flex min-h-30 flex-1 flex-col justify-center gap-1 py-3 pl-4 sm:min-h-40 sm:py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            {USER.displayName}
          </h1>

          <VerifiedIcon
            className="size-4.5 text-info select-none"
            aria-label="Verified"
          />

          {USER.namePronunciationUrl && (
            <PronounceMyName namePronunciationUrl={USER.namePronunciationUrl} />
          )}
        </div>

        <div className="py-0.5">
          <TextFlip
            className="font-pixel-square text-sm text-balance text-muted-foreground"
            variants={{
              initial: { y: -10, opacity: 0 },
              animate: { y: -1, opacity: 1 },
              exit: { y: 10, opacity: 0 },
            }}
            interval={1.5}
          >
            {USER.flipSentences}
          </TextFlip>
        </div>
      </div>
    </div>
  )
}
