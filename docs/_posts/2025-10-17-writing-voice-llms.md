---
layout: post
title: "Thoughts on Writing and LLMs"
date: 2025-10-17 00:30:00 -0500
tags: writing llm novels voice ai
---

Recently I've been thinking a lot about writing. Here are a few disjointed thoughts. Maybe by the
end of this piece I'll figure out some interesting way the three parts are connected. Or not.

## LLMs and Writing

I think LLMs are **extremely** neat / clever / cool pieces of technology. I'm not a super AI
maximalist, but I think they're almost surely going to be in the top 5 most important inventions of
my 28-year life, and I think there's a solid chance they end up being like far and away #1.

To belabor this point, I find LLMs in late 2025 to be extremely useful for a wide variety of use cases. From writing /
reading / debugging code, to aggregating useful information from across the internet, to
practicing my French speaking with ChatGPT and more, LLMs are a daily part of my life. As someone
building out some GenAI tooling at my day job, I should probably write up a more extensive description of my
current feelings and use of GenAI.

But in particular today, I want to discuss LLMs for writing. My stance here is not original, but
it is strongly held: **LLMs suck for writing, and in general, asking people to read
LLM-generated content is a waste of their time**. There are some caveats to this which I'll
call out below.

The core reason for this boils down to [what Paul Graham pointed out in a much better-written blog
post:](https://www.paulgraham.com/writes.html)

> Writing is thinking

Early in the post-ChatGPT world, I saw how everyone was using LLMs to generate emails and documents,
and figured I'd give it a shot too. I found myself composing detailed bullet-point prompts with what
I wanted the LLM to say. Then, the LLM would spit out a bunch of text 2-4x longer than my original
prompt.

But of course because LLMs know nothing about what I want to say beyond what's in the prompt, the
extra 100-300% of text ends up being pure, unfiltered cruft. I quickly decided that I almost never
wanted this cruft, and have stopped asking LLMs to write emails, or almost anything else, ever since.

This blog post in particular was prompted by an evening spent rewriting a coworker's document. I
like this coworker a lot. They're smart, thorough, and generally have good ideas. In this case,
they did a lot of leg work to gather requirements from a customer and try to map them to new and
existing functionality in our product.

But instead of writing up those requirements into a clear Statement of Work for the customer, this
coworker pasted a bunch of their notes into ChatGPT and asked it to generate a Statement of Work.
The 2023-era LLMs I experimented with were unambiguously bad for this type of task. Their writing
was so crufty that it was 100% clear that I was better off just using the prompt than anything it
spat out.

However, this generated document had all the hallmarks of my qualms with 2025 LLMs. Specifically, being
_just_ good enough to pass muster for a quick once-over, but falling over in critical ways when you
review their output with a sufficiently fine-toothed comb.

Luckily in this case, I didn't have to guess whether a line of code was hallucinated by GPT-5 or put
there for a reason by my coworker, since they were upfront about their LLM use. I ended up
substantially reorganizing the document. I had to incorporate context from conversations, our
codebase, and interpersonal relationships that the LLM just didn't have access to.

While I ended up copy/pasting large chunks of the LLMs document to various places of the new one, I
still am not sure if the LLM was a net time-saver. I think most of the parts I copied over were
lifted or translated fairly directly from meeting notes with the customer.

I found that trying to write the objective, timeline, and structure for the v2 of the document
actually required the most **thinking** on my end. And having a starting point that _sounds
reasonable_ but is actually not workable in subtle ways can make that process of thinking through an
_actually reasonable_ structure feel harder. I start off with an inherent sense that the LLM output
is wrong or bad in important ways, but instead of just writing something good from the start, I have
to first spend the time and effort to figure out the specific ways the LLM output is wrong.

### Caveats / counterarguments

With all the gripes I have about LLMs generating crufty or subtly-wrong text, there are some
reasonable counterarguments and caveats worth mentioning:

1. **Activation energy:** My coworker had already done a lot of legwork, and I have about 15 other
   things going on. If "write every doc from scratch" was a requirement, he might've been too
   exhausted to start it, and I would've pushed it behind 5 other fires I was currently fighting.
   Having the LLM make _something_, even something subtly wrong, can inspire action. The psychology
   behind [Cunningham's Law](https://meta.wikimedia.org/wiki/Cunningham%27s_Law) would point to this
   being a strong argument. In this way, LLMs can
   be good for getting past writer's block, when you need to say _something_ but just can't get
   the words down.
2. **Editing and individual sentences:** While it's disrespectful in some cases to _generate_ text
   with an LLM, it might be more disrespectful to ask for feedback on human-written text that _hasn't_
   had an LLM review it first. At a bare minimum, you should ask the LLM to catch any typos or
   grammatical errors, and it does a decent job at calling out particularly awkward sentences or
   overly-reused words. It's like having a linter in your CI – don't waste human time doing
   things machines are good at. Similarly, once you find those awkward sentences (whether with your
   own eyes or an LLMs), asking an LLM to spit out a few less-awkward options can help bypass
   indecision; it often generates an objectively better option.
3. **Domains where clarity is not paramount:** As an adult, almost all my writing has been for work
   (emails or internal tech plans/design docs), with a smattering of personal writing and this blog.
   In those situations, being clear and using the least amount of words to convey your meaning is a
   plus. Of course in school I had to write essays with painful word minimums, and surely would've
   used ChatGPT to flesh those last 10 words out if it had existed. But even though I haven't had to
   deal with them much, there are apparently adult situations where factors like "formality", "using
   specific phrasing", and "filling up many pages" (like what @patio11 calls "Dangerous Professional"
   tone) are useful. I've been lucky enough to mostly avoid legal proceedings and similar
   bureaucratic procedures, but according to @patio11, who has much more experience with this kind
   of writing, LLMs excel at this boilerplate generation.

## Blood Meridian and my impatience with beautiful prose

Recently I've been very slowly making my way through Blood Meridian. Over the summer, I read (i.e.
listened to, social media has rendered me unable to physically sit down and read which is a whole
other depressing fact for another blog) the Lord of the Rings trilogy for the first time, which are
objectively long books. Right before Blood Meridian, I read Abundance, a "airport book" about how we
can build more stuff and have better lives.

All 3 LOTR books were longer than Blood Meridian, but in the same amount of time it took me to get
through each LOTR, I'm still only about halfway through Blood Meridian. I've been a
bit down on myself because of this, and trying to think through the reasons for this. In
order of importance, I think they are:

1. For me, there's not much of a sense of plot or likable characters. I'm not really rooting for
   anything to happen, nor am I following along closely to see what happens to a character I like.
   There's kind of just lots of violence and depressing stuff mixed in with glimpses of beauty.
2. I'm busier. I had a number of trips over the summer which provided ample listening time, both
   in transit and on vacation. Since being back in NYC more permanently, I've been busier at work
   and have had less time and mental energy to focus on reading.
3. Blood Meridian is objectively a very depressing and in some cases disturbing book. I'm not
   talking literary analysis, but just the surface level "reading more about scalping
   babies" is depressing vibes. Not always the most enticing world to jump back into after a
   stressful work day!
4. McCarthy's prose is extremely dense. Whereas Tolkein is a rambler, so with LOTR, you can often miss a
   sentence here or there and still follow along with no problems. McCarthy uses lots of
   uncommon words/phrases, metaphors, and sudden bursts of action. Missing one sentence at the
   beginning of an analogy or vignette has caused me to rewind my Audible book by 1 minute more frequently than the
   Glanton gang takes a scalp.
5. McCarthy's prose is beautiful. I'm not so intrigued by the gratuitous violence in itself, but it
   is compelling as a contrast to the stark beauty of the American West and McCarthy's unique
   ability to describe it. While _most_ of the rewinds are because I missed something or didn't
   understand some obscure usage of a word, there are some times where I'm rewinding just to give
   full appreciate to how aesthetically pleasing some of McCarthy's writing is. Blood Meridian
   definitely wouldn't be _my_ choice for the Great American Novel (see #1), but in some sense I can
   see the argument. I can't imagine the following sentences **not** evoking some kind of feeling in
   any red-blooded American:
   > They wandered the borderland for weeks seeking some sign of the Apache. Deployed upon that plain
   > they moved in a constant elision, ordained agents of the actual dividing out the world which they
   > encountered and leaving what had been and what would never be alike extinguished on the ground
   > behind them. Spectre horsemen, pale with dust, anonymous in the crenellated heat. Above all else
   > they appeared wholly at venture, primal, provisional, devoid of order. Like beings provoked out
   > of the absolute rock and set nameless and at no remove from their own loomings to wander ravenous
   > and doomed and mute as gorgons shambling the brutal wastes of Gondwanaland in a time before
   > nomenclature was and each was all.

What I was trying to grapple with in this section is how I can enjoy certain bits and pieces of the
prose while still not really wanting to dive into the book. As a kid, I was a much more voracious
reader, and often described a book a "well-written". At the time, I didn't really know what I meant,
but I think now I'd probably say it means something like: there are separate axes for "having a good
plot/being a compelling storyteller" and "using language in an interesting way". I think I score
McCarthy highly in the latter category and not the former, and I guess at least for my current
ability to enjoy novels, high marks in storytelling/plot is table stakes.

## My voice in writing

Thinking about McCarthy's unique use of language made me think back about my own use of language.

I always liked math class and disliked English, but I did have one memorable, positive
experience in English: 8th grade, with Ms. Connors. I didn't actually _enjoy_ her class very much, but that's
because it was hard. I think we might've read Gatsby or something, but the class wasn't memorable
for the literature.

The reason I remember Ms. Connors' class 15 years later is because she made us
write. If I recall correctly, it wasn't a _ton_: it might've been one double-spaced page, somewhere
between 2-4 times a week. The homework was to write the page, and then in class we'd edit each
others' paragraphs, and she'd review our work. I took two main things from that class:

1. **The ability to fill a page:** This is something I don't think I've ever used as frequently as I

   did during this class. But I learned to fill a page with literary criticism of a book I didn't
   enjoy reading. After that, writing a lab report about a cool physics phenomenon in college, or
   a design doc for a new feature I was building at work still wasn't the highlight of my week, but
   also rarely felt like an insurmountable burden.

2. **An appreciation for brevity:** You may roll your eyes at this one given the length of this
   blog, but it was an important takeaway from this class. I think we read the Old Man and the Sea in
   this class (one of the few books I _did_ enjoy that year), and Ms. Connors repeatedly emphasized
   Hemingway's brevity as a strong point. Throughout the year, she encouraged us to cut out filler
   words and passive voice. I still struggle with this, but having that lesson instilled early on
   was a good starting point.

Into high school, the main outlet for my prose was literary analysis essays in English class. I've
gotta say, I never enjoyed literary analysis. Sometimes thinking about the meaning of books is fun,
but the level of reaching English teachers wanted us to do felt more like horoscopes than insight.
I wrote the occasional lab report, history paper, or creative writing exercise, but I feel like my
writing voice in high school was tuned for literary analysis, which I didn't like...so there wasn't
much of a voice.

In college and my early 20s, the switch flipped. I was now taking mostly STEM classes I
actually enjoyed, with a lot fewer overwrought literary analyses. I had to write a whole lot
of lab reports in LaTeX, but I found writing up findings, processes, and math analysis much less
daunting than trying to divinate why a character's scarf was blue on a Tuesday. When I got a job as
a software engineer, I found tech-business writing to be a natural extension of lab reports – you
trade off formulas for pseudocode, but overall mostly still just discussing technical methods and
processes.

As I've tried to write more in my late 20s, I've found the voice that feels natural to be very
strongly influenced by this technical writing. I mostly feel like I'm writing a design doc or
internal memo, but with the prerogative to use a few more cuss words/casual phrases. It makes sense
that this style now comes naturally to me, as I've spent much of my 20s reading tech blogs & writing
stuff for my tech jobs. It's definitely an authentic representation of part of me, but I don't feel
it to be complete, and I also don't know if it's the most compelling format for a blog. Most people
aren't going out of their way to read design docs in their free time. A voice exactly like
[this tweet](https://x.com/joeybeastmarket/status/1978267006177559005) is not naturally inside me.
But I think there's probably something in there that's more compelling than a TPS report. So I should
probably continue to try and write some less techy stuff and allow that voice out a bit more.
