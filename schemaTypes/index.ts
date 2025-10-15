import {postType} from './postType'
import {externalPublication} from './externalPublication'
import {sharedImage} from './sharedImage'
import {tag} from './tag'
import {captionType} from './captionType'
import {pageType} from './page'

import { videoHeroSection } from "./objects/videoHeroSection";
import { splitHeroSection } from "./objects/splitHeroSection";
import { heroSection } from "./objects/heroSection";
import { vacancySection } from "./objects/vacancySection";

import { jobPost } from "./jobPost";

import {cardsSection} from "./objects/cardsSection";
import {vacanciesListSection} from "./objects/vacanciesListSection";
import {faqSection} from "./objects/faqSection";
import {newsSection} from "./objects/newsSection";
import {resultsBlockSection} from "./objects/resultsBlockSection";
import {regulationImpactBlockSection} from "./objects/regulationImpactBlockSection";
import {stepsTimelineSection} from "./objects/stepsTimelineSection";

export const schemaTypes = [
	postType, 
	externalPublication,
	sharedImage,
	tag,
	captionType,
	pageType,
	videoHeroSection,
	splitHeroSection,
	heroSection,
	vacancySection,
	jobPost,
	cardsSection,
	vacanciesListSection,
	faqSection,
	newsSection,
	resultsBlockSection,
	stepsTimelineSection,
	regulationImpactBlockSection
]