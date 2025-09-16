import React from 'react'
import HotAppSection from './HotAppSection'
import PopularArticles from './PopularArticles'
import TopAppDeals from './TopAppDealSection'
import FeaturedByAppBrain from './FeaturedAppBrainSection'
import ToolsSection from './ToolsSection'
import AppBrainPromote from './AppBrainPromoteSection'
import AppBrainMonetize from './AppBrainMonetizeSection'
import AppBrainRanking from './AppBrainRankingSection'
import AppBrainIntelligence from './AppBrainIntelligence'

const ContentDisplay = () => {
    return (
        <div>
            <HotAppSection />
            <PopularArticles />
            <TopAppDeals />
            <FeaturedByAppBrain />
            <ToolsSection />
            <AppBrainPromote />
            <AppBrainMonetize />
            <AppBrainRanking />
            <AppBrainIntelligence />
        </div>
    )
}

export default ContentDisplay
