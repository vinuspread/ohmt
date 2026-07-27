import { HeroDrop } from './_components/sections/HeroDrop'
import { DropStrip } from './_components/sections/DropStrip'
import { StatementBlock } from './_components/sections/StatementBlock'
import { LineTiles } from './_components/sections/LineTiles'
import { CampaignBand } from './_components/sections/CampaignBand'
import { SplitPromo } from './_components/sections/SplitPromo'
import { SplitFeature } from './_components/sections/SplitFeature'
import { CraftStory } from './_components/sections/CraftStory'
import { PreFooterCta } from './_components/sections/PreFooterCta'
import { ART_TOY_DROPS, NEW_DROPS } from './data/figures'

export default function FigureShopHome() {
  return (
    <>
      <HeroDrop />
      <DropStrip id="drops" label="새로 나온 에디션" slugs={NEW_DROPS} priorityImages />
      <StatementBlock />
      <LineTiles />
      <CampaignBand />
      <DropStrip label="아트 토이" slugs={ART_TOY_DROPS} />
      <SplitPromo />
      <SplitFeature />
      <CraftStory />
      <PreFooterCta />
    </>
  )
}
