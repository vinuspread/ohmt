"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

interface Article {
  title: string;
  category: string;
  date: string;
  author: string;
  role: string;
  image: number;
  excerpt: string;
  content: string;
}

const articles: Record<string, Article> = {
  "global-trade-talks": {
    title: "Global Trade Talks Resume in Geneva",
    category: "World", date: "May 25, 2026", author: "James Mitchell", role: "International Correspondent", image: 1,
    excerpt: "Nations converge on historic trade agreement framework.",
    content: `In a significant move toward economic cooperation, representatives from 47 nations gathered in Geneva to resume discussions on a comprehensive trade agreement. The talks, stalled for six months, regained momentum following recent diplomatic breakthroughs.

## Key Areas of Negotiation

Agricultural trade remains the most contentious issue. Developing nations have pushed for reduced subsidies on staple crops, arguing that wealthy countries' support systems disadvantage smallholder farmers. A compromise framework is taking shape, with phased reductions over a seven-year period.

Digital commerce provisions are equally significant. The agreement includes groundbreaking clauses on cross-border data flows, digital taxation, and cybersecurity standards. Tech-heavy nations advocate for freer data movement, while others seek protections for local industries.

## Political Reactions

The agreement has proven politically contentious in several countries. In the United States, protectionist factions have warned against job losses, while export-oriented industries celebrate market opportunities. European nations remain divided on agricultural provisions.

"This agreement represents a critical moment for global cooperation," said UN Trade Commissioner Elena Vasquez. "We have an opportunity to build a more inclusive and sustainable international trade system."

## Economic Outlook

Economists estimate the agreement could add $1.2 trillion to global GDP over the next decade. The next round of negotiations is scheduled for July in Singapore, where delegates hope to finalize remaining technical details.`,
  },
  "emerging-markets-growth": {
    title: "Emerging Markets Show Strong Growth", category: "World", date: "May 25, 2026",
    author: "Lisa Chen", role: "Economics Reporter", image: 2,
    excerpt: "Southeast Asian economies outpace global averages.",
    content: `Southeast Asia's leading economies posted growth figures well above global averages in the latest quarterly report, defying expectations set by persistent global uncertainty. Vietnam, Indonesia, and the Philippines led the region with GDP expansions of 6.8%, 5.4%, and 5.9% respectively.

## Drivers of Growth

The surge is attributed to a combination of factors: a manufacturing boom driven by supply chain diversification away from China, rising domestic consumption, and a sharp increase in foreign direct investment. Vietnam alone attracted $18 billion in FDI during the first quarter, a 22% year-on-year increase.

Digital economy expansion has been equally impressive. E-commerce penetration in the region now rivals that of more developed markets, with mobile payment adoption crossing 70% in urban centers.

## Challenges Ahead

Despite the strong figures, analysts caution that inflation, infrastructure gaps, and governance concerns could dampen longer-term prospects. Currency volatility also presents risk, particularly for economies with high import dependency.

Regional finance ministers are scheduled to meet next month in Bangkok to coordinate a joint response to external economic pressures.`,
  },
  "climate-summit-fund": {
    title: "Climate Summit Pledges $500 Billion Fund", category: "World", date: "May 24, 2026",
    author: "Thomas Green", role: "Environment Correspondent", image: 3,
    excerpt: "Developed nations commit to green energy transition.",
    content: `World leaders at the annual Climate Action Summit announced a landmark $500 billion fund to accelerate the global transition to renewable energy. The pledge, made by the G20 nations, represents the largest single climate finance commitment in history.

## What the Fund Covers

The fund will be deployed over ten years, targeting solar and wind infrastructure in developing nations, coastal resilience projects, and clean transportation networks. A significant portion - approximately $120 billion - is earmarked for nations classified as "climate vulnerable."

## Skepticism and Criticism

Environmental groups cautioned against excessive optimism. Previous pledges, including the $100 billion annual commitment made in Paris in 2015, were never fully delivered. Campaigners are calling for binding disbursement timelines and independent oversight mechanisms.

"Money pledged is not money spent," said Claire Moffatt of the Global Climate Coalition. "We need accountability frameworks that have teeth."

## A Turning Point?

Despite the scepticism, negotiators point to structural differences in this commitment: it is backed by a new international climate finance body with a legal mandate, and contributions are tied to domestic policy benchmarks.`,
  },
  "border-dispute-ruling": {
    title: "International Court Rules on Border Dispute", category: "World", date: "May 24, 2026",
    author: "Maria Rodriguez", role: "Legal Affairs Editor", image: 4,
    excerpt: "Historic decision reshapes regional geopolitics.",
    content: `The International Court of Justice issued a landmark ruling on a long-standing maritime border dispute, a decision that is expected to reshape diplomatic relations across the region for years to come.

## The Ruling

In a 12-3 majority decision, the court sided with the claimant nation, awarding jurisdiction over a contested 340-kilometre stretch of coastline and the economic exclusion zone that accompanies it. The disputed territory contains significant fishing grounds and is believed to hold substantial offshore hydrocarbon deposits.

## Immediate Reactions

The respondent government called the decision "deeply unjust" and hinted at potential non-compliance, raising questions about the court's enforcement mechanisms. The ruling sparked protests in the capital, with demonstrators gathering outside the foreign ministry.

The winning government, by contrast, celebrated the decision as a vindication of its legal position maintained for over three decades. The president addressed the nation in a televised speech, calling for calm and regional dialogue.

## Broader Implications

Legal scholars note the ruling sets an important precedent for similar disputes pending before the court. International law experts predict a wave of filings as nations seek to resolve longstanding territorial ambiguities through multilateral legal channels.`,
  },
  "parliament-legislation": {
    title: "Parliament Passes Landmark Legislation", category: "Politics", date: "May 25, 2026",
    author: "David Sterling", role: "Political Editor", image: 2,
    excerpt: "New voting reforms take effect immediately.",
    content: `Parliament passed sweeping electoral reform legislation in a late-night session, marking the most significant overhaul of voting procedures in two decades. The bill, which passed with a 287 to 191 margin, introduces automatic voter registration, extended voting hours, and independent boundary review commissions.

## What Changes

Under the new law, citizens will be automatically registered to vote when they interact with government services. Polling stations will remain open for two consecutive days, and a new independent commission will redraw constituency boundaries every five years to reflect population shifts.

## Supporters

Proponents argue the reforms will significantly increase voter participation, particularly among younger and lower-income groups historically underrepresented at the polls. "Democracy works better when more people participate," said the bill's lead sponsor.

## Opposition

Critics from the opposition benches condemned the rushed timeline and argued that automatic registration opens the system to fraud. Several amendments seeking longer implementation windows were defeated on party-line votes.

The reforms take effect immediately for by-elections and will apply to the next general election, now scheduled for the autumn.`,
  },
  "election-procedures": {
    title: "Election Commission Announces New Procedures", category: "Politics", date: "May 25, 2026",
    author: "Sarah Jenkins", role: "Politics Reporter", image: 3,
    excerpt: "Transparency measures aim to increase voter confidence.",
    content: `The National Election Commission unveiled a comprehensive package of procedural reforms designed to address long-standing concerns about electoral transparency and public confidence in the voting process.

## New Measures

Among the most significant changes: all ballot counting will now be conducted in the presence of party observers and live-streamed to public portals. Voting machines will be required to produce paper audit trails. Results will be uploaded precinct-by-precinct in real time.

## Background

The reforms follow a contentious election cycle in which allegations of irregularities - never substantiated in court - nonetheless eroded public trust. Polling consistently showed declining confidence in electoral outcomes across demographic groups.

## Mixed Reactions

Civil society groups broadly welcomed the changes, calling them "a meaningful step forward." Technology experts raised questions about cybersecurity vulnerabilities in the live-streaming infrastructure, calling for robust protocols to prevent interference.

The Commission noted that independent audits will be conducted after each election and published within sixty days of voting.`,
  },
  "coalition-negotiations": {
    title: "Coalition Negotiations Reach Critical Phase", category: "Politics", date: "May 24, 2026",
    author: "Robert Walsh", role: "Parliamentary Correspondent", image: 4,
    excerpt: "Government formation talks intensify amid deadline.",
    content: `Government formation talks have entered a critical final phase, with negotiating teams working around the clock ahead of a constitutionally mandated deadline for a new administration to take office.

## State of Play

Three parties must reach agreement on a coalition programme covering taxation, housing, and immigration - the most contentious policy areas where their platforms diverge most significantly. The centre-left bloc has pushed for wealth taxes and social housing investment; the smaller junior partner insists on immigration caps as a condition for participation.

## The Sticking Points

Housing policy has emerged as the central fault line. The largest party proposes a public-private partnership model, while its prospective partners favour direct state construction at scale. Mediators have proposed a hybrid framework that both sides are cautiously considering.

## Timeline Pressure

Constitutional rules require a government to be sworn in within 45 days of the election result. Failure to do so triggers a second election - an outcome none of the parties can afford financially or politically.

Senior figures from all three delegations described the atmosphere as "tense but constructive" following last night's extended session.`,
  },
  "economic-policy-meeting": {
    title: "Political Leaders Meet on Economic Policy", category: "Politics", date: "May 24, 2026",
    author: "Emma Thompson", role: "Policy Correspondent", image: 1,
    excerpt: "Cross-party consensus emerges on fiscal strategy.",
    content: `In an unusually collaborative display, senior leaders from across the political spectrum convened at the Finance Ministry for a rare cross-party summit on economic policy, emerging with a shared framework on deficit reduction and public investment.

## The Consensus Framework

The joint communiqué commits all signatories to maintaining the deficit below 3% of GDP while protecting healthcare and education spending. Infrastructure investment - particularly in transport and digital connectivity - will be ring-fenced from planned cuts.

## Why Now

The meeting was convened in response to deteriorating fiscal forecasts, driven by lower-than-expected tax receipts and rising debt service costs. Officials warned that without a clear bipartisan signal to markets, borrowing costs could rise further.

## Limits of Agreement

Participants were careful to emphasise that agreement on a fiscal framework does not imply broader political cooperation. Substantive disagreements on social policy, immigration, and public sector pay remain unresolved.

Markets responded positively: sovereign bond yields fell marginally on news of the summit's outcome, and the currency gained half a percent against the euro.`,
  },
  "markets-banking-reforms": {
    title: "Stock Markets Rally on Banking Reforms", category: "Economy", date: "May 25, 2026",
    author: "Michael Brooks", role: "Markets Editor", image: 3,
    excerpt: "Investor confidence reaches six-month high.",
    content: `Equity markets surged across major exchanges following the announcement of sweeping banking sector reforms, with the primary index gaining 2.3% - its best single-day performance in six months.

## What Moved Markets

The rally was sparked by regulatory proposals that would ease capital requirements for mid-tier banks while introducing streamlined lending criteria for small business borrowers. Analysts interpreted the package as a signal that authorities are prioritising growth over caution.

Financial sector stocks led the gains, with major lenders rising between 3% and 5%. Technology companies followed closely, anticipating easier access to credit for expansion.

## Analyst Reactions

"This is a structural shift in the regulatory posture," said Dr. Hannah Nguyen of Capital Research. "The market is pricing in a sustained improvement in credit availability, which has been the missing ingredient in the recovery."

Others urged caution: any easing of capital buffers must be carefully calibrated to avoid repeating the risks that precipitated the 2008 financial crisis.

## Outlook

Trading volumes were the highest since January, suggesting genuine conviction behind the move. The central bank's next policy statement - expected in three weeks - will be closely watched for further signals.`,
  },
  "interest-rates-steady": {
    title: "Central Bank Holds Interest Rates Steady", category: "Economy", date: "May 25, 2026",
    author: "Caroline Price", role: "Economics Correspondent", image: 4,
    excerpt: "Officials cite stable inflation as key factor.",
    content: `The central bank held its benchmark interest rate unchanged at 4.25% following its monthly policy meeting, citing stabilising inflation and resilient employment data as grounds for maintaining the current stance.

## The Decision

The Monetary Policy Committee voted 7-2 in favour of holding, with two members dissenting in favour of a 25 basis point cut. The minutes, released simultaneously, reveal a committee increasingly open to easing if forthcoming data confirms the inflation trajectory.

## Inflation Outlook

Headline inflation came in at 2.8% in the latest reading - above the 2% target but meaningfully lower than the 4.6% peak recorded eighteen months ago. The committee attributed the decline to easing energy prices and moderating wage growth.

## What Comes Next

Markets are pricing in a first rate cut in September, with two further reductions anticipated by year-end. The governor cautioned against front-running expectations, noting that the committee will remain "data dependent" and that the path down will be gradual.

Mortgage holders and businesses awaiting relief will need to exercise continued patience.`,
  },
  "tech-job-creation": {
    title: "Tech Sector Drives Job Creation Surge", category: "Economy", date: "May 24, 2026",
    author: "Alan Foster", role: "Business Reporter", image: 1,
    excerpt: "Unemployment falls to lowest level in five years.",
    content: `The national unemployment rate fell to 3.8% in May - its lowest level in five years - with the technology sector accounting for the largest share of new job creation, according to figures released by the statistical office.

## Sector Breakdown

Technology and digital services added 84,000 jobs in the quarter, driven by demand for software engineers, data scientists, and AI specialists. Healthcare was the second strongest contributor, followed by construction and renewable energy.

Traditional sectors showed mixed results. Retail employment declined for the seventh consecutive quarter, while financial services added modestly on the back of increased activity following recent market gains.

## Skills Mismatch

Despite the headline figures, employers report persistent difficulty filling technical roles. A survey conducted alongside the data release found that 62% of technology companies have open positions that remain unfilled for more than three months.

Education officials and industry groups have called for expanded vocational training programmes and immigration pathways for skilled workers.

## Wage Growth

Average wages grew 3.9% year-on-year - above inflation but below the pace recorded in the previous two years, suggesting the labour market is gradually normalising from its post-pandemic tightness.`,
  },
  "real-estate-recovery": {
    title: "Real Estate Market Shows Signs of Recovery", category: "Economy", date: "May 24, 2026",
    author: "Victoria Newman", role: "Property Correspondent", image: 2,
    excerpt: "Property values stabilise after recent downturn.",
    content: `After eighteen months of declining valuations and subdued transaction volumes, the residential property market is showing credible signs of stabilisation, according to the latest industry data released this week.

## The Numbers

Average house prices rose 0.4% month-on-month in April - the second consecutive monthly increase after a period of consistent declines. Transaction volumes climbed 8% compared to the same month last year, suggesting a gradual return of buyer confidence.

## What's Driving the Shift

Agents point to a combination of factors: improved mortgage availability following last year's lender competition, declining asking prices that have made ownership more accessible for first-time buyers, and a continued shortage of new supply in urban centres.

## Regional Variation

The recovery is uneven. Major cities are seeing the strongest rebound, while rural areas and smaller towns continue to lag. Coastal property markets, buoyed by domestic tourism and remote working trends, have outperformed expectations.

## Risks Remain

Analysts caution that recovery remains fragile. A return of interest rate pressure, or a deterioration in employment conditions, could reverse the trend quickly. "We are at the beginning of stabilisation, not the beginning of a new boom," said the chief economist of the National Property Institute.`,
  },
  "ai-breakthrough": {
    title: "AI Breakthrough: New Model Shows Remarkable Capabilities", category: "Technology", date: "May 25, 2026",
    author: "Dr. Alex Kumar", role: "Technology Editor", image: 4,
    excerpt: "Researchers announce major leap in machine learning.",
    content: `Researchers at the Institute for Advanced Computation have published results demonstrating a new artificial intelligence architecture that outperforms current leading systems across a wide range of reasoning and language tasks, including several previously considered beyond machine capability.

## What the Model Can Do

The model, designated ARC-7, demonstrates what researchers describe as "contextual reasoning chains" - the ability to break complex problems into sequential logical steps and self-verify intermediate conclusions. In benchmark evaluations, it scored higher than any previous system on abstract reasoning tasks.

## Scientific Significance

The architecture introduces a novel memory consolidation mechanism that allows the model to efficiently retrieve and apply information across long contexts without performance degradation. Prior systems struggled significantly with tasks requiring sustained coherence over extended sequences.

## Industry Implications

Technology companies and investors responded immediately. Several major firms announced accelerated AI research programmes, and venture capital activity in the sector surged on the day of publication.

Ethicists and policymakers called for urgent regulatory attention. "The pace of capability development is outstripping our governance frameworks," said Professor Yuki Tanaka of the AI Safety Institute.`,
  },
  "quantum-milestone": {
    title: "Quantum Computing Reaches New Milestone", category: "Technology", date: "May 25, 2026",
    author: "Dr. Rebecca Lee", role: "Science Correspondent", image: 1,
    excerpt: "Prototype solves complex optimisation problem.",
    content: `Scientists at the National Quantum Laboratory announced that their latest prototype quantum computer successfully solved a 1,000-variable optimisation problem in 4.2 seconds - a task that would take the world's fastest classical supercomputer an estimated 47 years.

## The Significance

The demonstration marks a qualitative advance in what researchers call "quantum advantage" - the point at which quantum systems outperform classical computers on practically meaningful problems. Previous milestones involved highly artificial problems engineered to showcase quantum properties.

## How It Works

The machine uses 512 qubits operating at near absolute zero temperatures, with a novel error-correction scheme that allows sustained coherence for longer than any prior system. Error rates fell below the threshold researchers considered necessary for practical applications.

## Commercial Timeline

While the laboratory setting is far removed from commercial deployment, industry observers see the results as a meaningful step. Pharmaceutical companies, financial institutions, and logistics firms - all of which face complex optimisation challenges - are watching closely.

"We are not there yet, but we now have a credible path," said the laboratory's director.`,
  },
  "smartphone-innovation": {
    title: "Smartphone Innovation Cycle Accelerates", category: "Technology", date: "May 24, 2026",
    author: "Marcus Chen", role: "Consumer Tech Reporter", image: 2,
    excerpt: "New features promise major productivity gains.",
    content: `After several years of incremental hardware improvements, the smartphone industry appears to be entering a new phase of rapid innovation, driven by advances in on-device AI processing and foldable display technology.

## Key Developments

Three of the leading manufacturers will release devices this quarter featuring dedicated AI co-processors capable of running large language models locally - without cloud connectivity. The privacy and latency implications are significant: users will be able to access AI assistance without their queries leaving their devices.

Foldable displays have also reached a commercial maturity point, with durability and price both improving substantially. Industry analysts project foldables will account for 12% of premium device sales by end of year.

## Consumer Response

Early adoption surveys suggest strong interest in the AI features, particularly for real-time translation, contextual document summarisation, and health monitoring. Privacy-conscious consumers are specifically attracted by on-device processing.

Battery life and repair costs remain the top concerns for mainstream buyers considering an upgrade.`,
  },
  "cybersecurity-framework": {
    title: "Cybersecurity Threats Prompt New Framework", category: "Technology", date: "May 24, 2026",
    author: "Jonathan Blake", role: "Cybersecurity Correspondent", image: 3,
    excerpt: "Global standards established for data protection.",
    content: `An international coalition of 38 governments and the leading technology industry associations have jointly adopted a new cybersecurity framework, establishing baseline standards for critical infrastructure protection and consumer data security.

## Framework Highlights

The standards require organisations operating critical infrastructure to implement multi-factor authentication across all administrative systems, conduct independent security audits annually, and report significant breaches to national authorities within 72 hours.

For consumer-facing services, new requirements mandate clear data retention limits, prohibition on selling biometric data to third parties, and minimum encryption standards for data at rest and in transit.

## Industry Reaction

Technology industry groups broadly welcomed the framework while raising concerns about compliance costs for smaller firms. Cybersecurity companies noted that the standards, while a step forward, do not address emerging threats from AI-generated attacks and deepfake social engineering.

## Enforcement

The framework relies on national regulatory bodies for enforcement, meaning the practical effect will vary significantly across jurisdictions. Legal experts called for a binding international treaty to ensure consistent application.`,
  },
  "museum-masterpiece": {
    title: "Major Museum Acquires Lost Masterpiece", category: "Culture", date: "May 25, 2026",
    author: "Isabella Romano", role: "Arts & Culture Editor", image: 2,
    excerpt: "Rediscovered painting valued at $50 million.",
    content: `The National Gallery announced the acquisition of a previously unknown work attributed to a Renaissance master, describing the discovery as "one of the most significant art historical finds of the century."

## The Painting

The work, a large-scale oil on panel depicting a mythological scene, was discovered in a private estate during a routine property valuation. Dendrochronological analysis and pigment testing confirm a production date consistent with the attributed artist's active period, and stylistic analysis by leading scholars supports the attribution.

## Acquisition Process

The museum competed against several major private collectors in a private sale before securing the work for a reported £42 million - below initial valuations but still among the most expensive domestic art acquisitions on record.

## Public Access

The painting will go on public display following a six-month conservation and restoration process. The museum plans an exhibition contextualising the work within the artist's known oeuvre, drawing loans from collections across Europe.

"This is a work that changes our understanding of the period," said the museum's chief curator.`,
  },
  "film-festival": {
    title: "Film Festival Celebrates Independent Filmmakers", category: "Culture", date: "May 25, 2026",
    author: "Oscar Delgado", role: "Film Critic", image: 3,
    excerpt: "Record attendance marks cultural shift.",
    content: `This year's International Independent Film Festival closed with record attendance figures and a programme widely praised for its breadth, ambition, and deliberate focus on voices from the global south and underrepresented communities.

## Highlights of the Programme

The grand jury prize went to a debut feature from a Senegalese director - a lyrical examination of generational memory and postcolonial identity that drew standing ovations at every screening. The audience award followed a quieter path, going to a Spanish-language documentary about urban renewal in a Latin American city.

## Attendance and Industry Impact

Over 65,000 tickets were sold across the ten-day festival, a 23% increase on the previous record. Industry delegates from major streaming platforms and distributors attended in unusually high numbers, signing multiple acquisition deals during the event.

## The State of Independent Film

Festival organisers noted that streaming platforms have created a complex landscape for independent filmmakers: access to global audiences has expanded, but algorithmic curation and platform consolidation present new challenges for discoverability.

"There has never been more content and never been harder to be seen," said the festival director.`,
  },
  "ballet-premiere": {
    title: "Ballet Company Premieres Modern Production", category: "Culture", date: "May 24, 2026",
    author: "Victoria Lane", role: "Performing Arts Correspondent", image: 4,
    excerpt: "Fusion of classical and contemporary dance wows audiences.",
    content: `The National Ballet Company's world premiere of its new commission received a rapturous response from a sold-out opening night audience, with critics declaring it the most ambitious and fully realised work in the company's recent history.

## The Production

Choreographed by an internationally celebrated artist making her mainstage debut, the ninety-minute work blends classical ballet vocabulary with contemporary movement, live electronic score, and immersive stage design that transforms the traditional proscenium space.

The piece explores themes of environmental loss and collective memory, drawing on folk movement traditions from three continents.

## Critical Reception

Early reviews were unanimously enthusiastic. "This is what it looks like when a major institution genuinely takes a creative risk," wrote one leading critic. "The company dances with a freedom and commitment rarely seen."

## Touring Plans

Following its initial run of twelve performances, the production will tour to six international cities over the next eighteen months, with dates confirmed in Paris, Tokyo, New York, Sydney, Berlin, and São Paulo.`,
  },
  "music-streaming-growth": {
    title: "Music Streaming Services Report Growth Surge", category: "Culture", date: "May 24, 2026",
    author: "Nathan Scott", role: "Music Industry Reporter", image: 1,
    excerpt: "Listener engagement reaches all-time high.",
    content: `The global music streaming sector reported its strongest growth quarter in three years, with total subscribers crossing 800 million for the first time and listening hours reaching record levels across all major platforms.

## The Numbers

Combined subscriber figures across the top five streaming services grew 14% year-on-year, driven by strong uptake in South and Southeast Asia, Sub-Saharan Africa, and Latin America. Average listening time increased to 28 minutes per day - up from 22 minutes three years ago.

## What's Driving Growth

Improved localisation - including investment in regional music catalogues, local language interfaces, and region-specific playlisting - has dramatically improved adoption in non-English-speaking markets. Bundled offerings with mobile data packages have also expanded access among price-sensitive consumers.

## Artist Economics

The growth has not uniformly benefited artists. Per-stream royalty rates remain a source of intense controversy, with independent musicians and smaller rights holders arguing the economics of streaming systematically disadvantage them relative to major label acts.

Several governments are considering legislation to mandate minimum per-stream payments and greater transparency in royalty allocation.`,
  },
  "championship-final-delivers": {
    title: "Championship Final Delivers Historic Victory", category: "Sports", date: "May 24, 2026",
    author: "James Patterson", role: "Sports Editor", image: 1,
    excerpt: "Underdog team claims title in thrilling match.",
    content: `In one of the most dramatic finals in championship history, Riverside United claimed their first title with a stunning 3-2 victory over defending champions Metropolitan City. The match, played before 85,000 fans at Central Stadium, will be remembered for decades.

## The Historic Upset

Metropolitan City entered as overwhelming favourites. However, Riverside United's disciplined defensive approach and clinical counter-attacking proved devastating. The underdogs opened the scoring in the 12th minute through midfielder Sarah Thompson's brilliant left-footed strike.

Metropolitan equalised within minutes, setting the stage for an intense battle. The decisive moment came in the 78th minute when striker Danny Hughes scored following a scramble in the penalty area.

## Standout Performances

Hughes, who transferred to Riverside from a lower division club just one year ago, emerged as the match's hero. Goalkeeper Marcus Chen made several critical saves in the closing minutes, preserving the lead.

## The Celebration

The victory sparked jubilant scenes across Riverside, with thousands gathering in the town centre. Captain Rebecca Williams held the trophy aloft as fireworks lit the sky.

"I always believed in this team," she said. "Everyone wrote us off, but we knew we had something special."`,
  },
  "olympic-venue-2032": {
    title: "Olympic Venue Selection Announced for 2032", category: "Sports", date: "May 25, 2026",
    author: "Sofia Martinez", role: "Sports Correspondent", image: 2,
    excerpt: "Council selects host city after competitive bidding.",
    content: `The International Olympic Council concluded a four-year selection process by announcing the host city for the 2032 Games, ending months of speculation and delivering a result that surprised several observers who had favoured alternative bids.

## The Decision

The council voted 68 to 42 in favour of the winning city, which prevailed on the strength of its infrastructure plan, sustainability commitments, and financial guarantees. The host has committed to carbon-neutral Games and a post-event legacy plan centred on public sport participation.

## Competing Bids

Three cities had remained in contention through the final selection stage, each presenting detailed proposals evaluated against the council's revised "New Norm" criteria, which de-emphasise new construction in favour of existing venues.

## Legacy Questions

Critics questioned whether the financial modelling for the Games - projected at $14 billion - is realistic. Previous host cities have consistently exceeded budget by significant margins, with costs falling disproportionately on local taxpayers.

The organising committee acknowledged the risks while arguing that the economic and diplomatic benefits justify the investment.`,
  },
  "tennis-grand-slam": {
    title: "Tennis Star Wins Grand Slam in Upset", category: "Sports", date: "May 24, 2026",
    author: "William Hayes", role: "Tennis Correspondent", image: 3,
    excerpt: "Unseeded player claims unexpected title.",
    content: `In one of the most stunning upsets in Grand Slam history, an unseeded wildcard entry captured the championship title, defeating the world number one in a five-set final that lasted over four hours and kept a capacity crowd on the edge of their seats throughout.

## The Match

The champion, ranked 112th in the world entering the tournament, had already eliminated three seeded players en route to the final. Few expected the run to continue against an opponent who had dominated the circuit for three years and arrived as an overwhelming favourite.

The decisive fifth set was a masterclass in mental fortitude. Trailing 4-2, the eventual champion reeled off five consecutive games to close out one of the greatest comebacks the sport has witnessed.

## Who Is This Champion

The winner, a 24-year-old from a nation with no prior Grand Slam champions, began playing tennis at age 14 with a racket borrowed from a local club. Their story has already captured international attention.

## What This Means

The victory will catapult the player from obscurity to the top of global rankings and is expected to generate significant media and sponsorship interest.`,
  },
  "world-championships-records": {
    title: "Athletic Records Fall at World Championships", category: "Sports", date: "May 24, 2026",
    author: "Angela Pierce", role: "Athletics Correspondent", image: 4,
    excerpt: "Multiple athletes break long-standing standards.",
    content: `The World Athletics Championships delivered a historic session with four world records broken across three events, prompting celebrations from spectators and a fresh wave of debate about the role of technology in elite sport.

## The Record Breakers

The 400m hurdles world record, standing for eight years, fell twice in a single day - first in the morning heat, then again in the final. The 10,000m world record was shattered in a breathtaking closing kilometre. A field event world record also fell, the first in that discipline in eleven years.

## Technology Debate

The records reignited long-running debate about the contribution of advanced footwear technology. Critics argue that carbon-plated shoes have fundamentally altered the performance landscape, making direct comparison to previous eras meaningless.

Athletics' governing body has maintained that current shoe regulations are appropriate, but several former champions publicly disagree.

## Championship Impact

Beyond the records, the competition delivered exceptional depth across disciplines. Multiple events saw the top four finishers achieve all-time top-ten performances - an indication that the improvement is broad rather than isolated.

The championships will be remembered as a landmark moment in the sport's history.`,
  },
};

function renderContent(content: string) {
  return content.trim().split('\n').map((line, idx) => {
    if (line.startsWith('## ')) {
      return <h2 key={idx} className="font-[family-name:var(--theme-font-heading)] text-xl font-bold mt-10 mb-4 text-black border-l-4 border-[var(--color-primary)] pl-4">{line.replace('## ', '')}</h2>;
    }
    if (line.trim()) {
      return <p key={idx} className="text-[1rem] text-[#444] leading-[1.4] mb-5 font-sans">{line}</p>;
    }
    return null;
  });
}

export default function ArticleDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = React.use(params);
  const article = articles[slug];

  if (!article) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-white text-[var(--color-secondary)]">
          <Header />
          <div className="max-w-[1280px] mx-auto px-8 py-16 md:py-32 text-center">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <Link href={`/en/templates/OHMT013-newspaper-EN/${category}`} className="text-[var(--color-primary)] hover:underline">Back to {category}</Link>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  const related = Object.entries(articles)
    .filter(([s, a]) => s !== slug && a.category === article.category)
    .slice(0, 4);

  const otherCategories = ['World', 'Politics', 'Economy', 'Tech', 'Culture', 'Sports']
    .filter(c => c !== article.category).slice(0, 4);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-secondary)] selection:bg-[var(--color-primary)] selection:text-white">
        <Header />

        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Back */}
          <div className="py-6 border-b border-[#EEE]">
            <Link href={`/en/templates/OHMT013-newspaper-EN/${category}`} className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-wider text-[#555] hover:text-[var(--color-primary)] transition-colors">
              <ArrowLeft size={13} /> Back to {article.category}
            </Link>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12 py-10">

            {/* ── Main article ── */}
            <article className="flex-1 min-w-0">
              <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">{article.category}</span>
                  <span className="text-[#CCC]">·</span>
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#999]">{article.date}</span>
                </div>
                <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] mb-6 border-t-4 border-black pt-5">
                  {article.title}
                </h1>
                <div className="flex items-center gap-3 pb-6 border-b border-[var(--color-border)]">
                  <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white text-[0.65rem] font-bold shrink-0">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-[0.75rem] font-bold text-black">{article.author}</div>
                    <div className="text-[0.7rem] text-[#888]">{article.role}</div>
                  </div>
                  <div className="ml-auto flex gap-4">
                    {['Twitter', 'Facebook', 'Email'].map(s => (
                      <Link key={s} href="#" className="text-[0.68rem] font-bold uppercase tracking-wider text-[#AAA] hover:text-[var(--color-primary)] transition-colors">{s}</Link>
                    ))}
                  </div>
                </div>
              </motion.header>

              {/* Hero image */}
              <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-10">
                <img loading="lazy" src={`/templates/newspaper/news-${article.image}.jpg`} className="w-full h-[420px] md:h-[500px] object-cover" alt={article.title} />
                <figcaption className="mt-3 text-[0.72rem] text-[#999] font-sans">{article.excerpt}</figcaption>
              </motion.figure>

              {/* Content */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                {renderContent(article.content)}
              </motion.div>

              {/* Author box */}
              <div className="border-t-2 border-black mt-14 pt-8 pb-16 flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white text-[0.8rem] font-bold shrink-0">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-[0.75rem] font-bold uppercase tracking-wider text-black mb-1">{article.author}</div>
                  <div className="text-[0.72rem] text-[var(--color-primary)] mb-2">{article.role}</div>
                  <p className="text-[0.82rem] text-[#555] leading-[1.4] font-sans">
                    {article.author} is {article.role} with over a decade of experience covering {article.category.toLowerCase()} stories worldwide.
                  </p>
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="lg:w-[300px] xl:w-[320px] shrink-0 space-y-10">

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#999] mb-4 pb-3 border-b-2 border-black">
                    More in {article.category}
                  </h3>
                  <div className="space-y-0">
                    {related.map(([s, a]) => (
                      <Link key={s} href={`/en/templates/OHMT013-newspaper-EN/${category}/${s}`}
                        className="group flex gap-3 py-4 border-b border-[#EEE] hover:border-[var(--color-primary)] transition-colors">
                        <img loading="lazy" src={`/templates/newspaper/news-${a.image}.jpg`} alt={a.title}
                          className="w-16 h-16 object-cover shrink-0 group-hover:opacity-80 transition-opacity" />
                        <div>
                          <p className="font-[family-name:var(--theme-font-heading)] text-[0.85rem] font-bold leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-3">{a.title}</p>
                          <p className="text-[0.68rem] text-[#999] mt-1 font-sans">{a.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Subscribe CTA */}
              <div className="bg-[var(--color-primary)] p-6 text-white">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-3 opacity-70">Digital Edition</p>
                <h4 className="font-[family-name:var(--theme-font-heading)] text-[1.3rem] font-bold leading-tight mb-3">
                  Get unlimited access to VINUS TIMES
                </h4>
                <p className="text-[0.78rem] opacity-80 mb-5 leading-[1.4]">Breaking news, in-depth reporting, and expert analysis - delivered daily.</p>
                <button className="w-full py-3 bg-white text-[var(--color-primary)] text-[0.72rem] font-bold uppercase tracking-wider hover:bg-[var(--color-bg-secondary)] transition-colors">
                  Subscribe Now
                </button>
                <p className="text-[0.65rem] opacity-60 mt-2 text-center">From $3.50 / week</p>
              </div>

              {/* Other sections */}
              <div>
                <h3 className="font-[family-name:var(--theme-font-heading)] text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#999] mb-4 pb-3 border-b-2 border-black">
                  Explore
                </h3>
                <div className="space-y-2">
                  {otherCategories.map(cat => (
                    <Link key={cat} href={`/en/templates/OHMT013-newspaper-EN/${cat.toLowerCase()}`}
                      className="flex items-center justify-between py-3 border-b border-[#EEE] group hover:border-[var(--color-primary)] transition-colors">
                      <span className="font-[family-name:var(--theme-font-heading)] font-bold text-[0.9rem] group-hover:text-[var(--color-primary)] transition-colors">{cat}</span>
                      <span className="text-[#CCC] group-hover:text-[var(--color-primary)] transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="border border-[var(--color-border)] p-6">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#999] mb-2">Newsletter</p>
                <h4 className="font-[family-name:var(--theme-font-heading)] font-bold text-[1.05rem] mb-3">The Daily Briefing</h4>
                <p className="text-[0.78rem] text-[#555] mb-4 font-sans leading-[1.4]">Top stories, curated every morning.</p>
                <input type="email" placeholder="Your email address"
                  className="w-full border border-[var(--color-border)] px-3 py-2.5 text-[0.8rem] font-sans outline-none focus:border-black transition-colors mb-2" />
                <button className="w-full py-2.5 bg-black text-white text-[0.7rem] font-bold uppercase tracking-wider hover:bg-[var(--color-primary)] transition-colors">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
