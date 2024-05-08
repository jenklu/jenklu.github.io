---
layout: post
title: "Interviewing in the age of ChatGPT"
date: 2024-05-07 11:30:00 -0400
tags: tech recruiting hiring
---

### My history interviewing

I did my first real software interviews almost exactly 6 years ago while recruiting for post-junior
year summer internships. Back then, I remember taking brainteaser-style coding challenges in timed
environments, both Hackerrank-style async interviews and in-person whiteboard interviews.

Since then, I've been on both ends of dozens more technical interviews, almost all of which are in
roughly that same format. A good chunk of the interviews I've given were at Google. When I was there
(til Summer 2022), my impression was that their interview process was both well-refined (based on
lots of iterations) and very objective. Googlers had spent a lot of time over dozens of years and
thousands of interviews tinkering with the process. Interviewers shared a bank of vetted questions
that poked at "technical aptitude". Each interviewer picks one or a few questions they know well, so
they can calibrate performance across interviews. Once interviewers write up feedback, a totally
separate group of senior engineers & managers read the feedback and decide whether to hire. HR
presented data showing how good they were at hiring to us. Basically, even though I knew hiring was
hard, Google had a thorough process and smart people putting a lot of effort in, so I thought they
were good at it.

In summer 2022, I left Google to join the startup I'm currently at, and I've been pretty involved in
hiring engineers here. Since it's a startup, we've decided not to use [innovation tokens](https://boringtechnology.club/)
on the interviews themselves -- we generally have one behavioral/CV interview and a technical
interview that looks kind of like a LeetCode question. However, unlike at Google, where I generally
never thought about the feedback or saw the person in my life after the interview, at my current
place I was both involved in the "hiring committee" (since why not get the feedback directly), and
I've also been working with the people we hired.

### Interviewing is hard

Seeing the whole pipeline, I've been a bit shocked at how poorly the "LeetCode style" question
predicts performance of potential hires. We've hired great coworkers who didn't do so great on the
technical interview based on their CVs/behavioral interviews/references.

I feel like my startup also has smart people who put a lot of effort into hiring, and I've felt that
my interview questions are of a similar quality and calibration to the ones I asked at Google, so
I've been struggling a bit with the dissonance between the impression Google gave off (our technical
interviews are great at predicting good coworkers!) and my lived experience.

My first takeaway is just that figuring out high SNR interviews is a really hard problem -- harder
than it seems from the interviewer side. As an interviewer, I grew to like questions that separated
candidates: in some questions everyone just does OK, but I wanted ones where some people bombed
and some excelled. This is a good quality, but I now feel that it's far from being sufficient to
actually evaluate how good a SWE someone is. And given how much time Google spent crafting LeetCode
questions, I'm a little dubious it's even possible to make them high SNR.

But I suspect that isn't the whole story. My startup questions might be worse than I think, our
sample size is a lot smaller than Google's, the list goes on. I also coincidentally saw
[this Emmett Shear tweet](https://twitter.com/eshear/status/1787851022683050254) while writing this
up, and his #2 obviously happens sometimes:

> There are two reasons that someone would fail an interview question that should be easy given their CV.
>
> (1) they’re actually incompetent
>
> (2) the interview was scary and they froze

### Maybe it's ChatGPT's fault...

But I do wonder if another external cause played a role in the diference between my mostly-2023
startup interviews and pre-summer-2022 experiences: while both sets of interviews were remote,
only the startup interviews were in the ChatGPT era. It sucks to think about, but thinking back
I really wonder if some candidates that did well were using ChatGPT to help.

While that definitely isn't the only factor at play here, I do wonder if the era of ChatGPT will
kill the "Remote LeetCode" brand of interviewing. I suspect companies might either start to shift
their interviews towards more behavioral/"how did you implement this system"/reference-based
hiring, AND/OR will actually go back to good old-fashioned in-person interviewing. You can't ask
ChatGPT for help when you're writing on a whiteboard right next to someone! Either way, we'll see.
Maybe ChatGPT v5 will finally take all of our SWE jobs anyway and make this whole point moot 🤷‍♂️
