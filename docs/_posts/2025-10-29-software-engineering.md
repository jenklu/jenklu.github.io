---
layout: post
title: "What is Software Engineering?"
date: 2025-11-4 00:45:00 -0500
tags: tech career software engineering
---

Outside the world of tech, "hacker", "programmer", "coder", "software developer", and "software
engineer" are all more or less synonymous terms. Even within tech, I'm not sure there's a totally
consensus definition on the difference between them all. The
["Software Engineering" Wikipedia article](https://en.wikipedia.org/wiki/Software_engineering) has
some pretty interesting delineations as a starting point.

I mostly wanted to write an article describing what I think are the most important skills for
working as a SWE, and because I'm naturally pedantic, I thought it'd be fun to make my case for why
Software Engineering _is_ an engineering discipline as well.

### What is an engineer?

Before getting into the different terms for people who write code, it's important to start off
with what it means to be an "engineer".

Formally, I majored in "Computer Science" at a "School of
Engineering and Applied Sciences" (sometimes shortened to "School of Engineering"). This basically means
that unlike at some schools where CS is lumped in with science or math majors, I had
to take all the same physics, math, and "engineering ethics" series as the mechanical/electrical
engineers who work on rockets or bridges or transformers.

In my eyes, the discipline of engineering can be distilled to the following points:

1. Intentional application of scientific principles
2. To solve problems for people
3. In a structured, well-planned, repeatable way
4. With solutions that will last for a long time

To add some color:

1. Engineers _use_ science, but they are not generally developing new scientific principles.
2. Engineering is focused on addressing real issues people have, not abstractly finding new stuff
   for novelty's sake.
3. Detailed planning is an inherent aspect of engineering. If something cannot be repeated, it's a
   craft or an art, not engineering.
4. Engineering generally aims to produce lasting artifacts – Roman aqueducts are still standing! "A
   long time" can mean years, not millennia, but engineering requires a focus on durability.

### What is a software engineer?

The way I think about it, there is a hierarchy of terms for "people who write code", where each
category builds up from the prior one:

1. "hacker" / "coder" / "programmer": This is just someone who knows how to give specific
   instructions to computers in the form of code. A scientist making a one-off Python script to
   analyze their data, a data scientist writing SQL queries to pull out relevant metrics, and an
   actuary building out pricing models in R can all be said to be "programming" or "coding".
2. "software developer": This is a job title. It describes a job where the primary role is producing
   software. It is true that a "software developer" is a "coder", "hacker", or "programmer".
3. "software engineer": This is a job title AND an engineering discipline. In my opinion, many
   people with the job title of "software engineer" would be better described as "software
   developers". A software engineer is someone who develops software with the discipline and
   principles of an engineer.

In my eyes, the most tenuous part of the "Engineering" definition when it comes to "Software
Engineering" is #1, the "intentional application of science". It's impossible to write large-scale
software projects without occasionally running into discrete math or fundamental CS problems, but
day-to-day, most SWEs outside of hardcore R&D labs are probably not intentionally applying core
science in their day-to-day. So if you want to debate me on that, I won't push too hard.

Hackers, coders, programmers, and software devs can run into those problems too, and they certainly
are addressing aspect #2 of engineering: they wouldn't be taking the time to write the code if they
weren't trying to solve a problem for someone.

But where **I** think Software Engineers separate themselves is on criteria #3 and #4: the emphasis
on planning, reliability, and durability. The entire raison d'être of software is that it allows
adapting to changing requirements – for truly permanent/unchanging computing, talk to ASIC designers.

However, there is a fundamental difference in durability requirements between Microsoft Excel, which
is designed to run on billions of different machines over a time span of decades, and a VBA macro
written by a banking analyst run once for a single deal.

### Software Engineering: Specific Skills

Software Engineering is the set of practices that enable software like Google Search to work for
decades. In my experience, the most important skills that separate Software Engineers from coders
are:

1. **Technical architecture and design**: Software engineers are comfortable dealing with
   software systems larger than a single application or service. They should be able to jump between
   layers of abstraction in the process of solving a problem.
2. **Task breakdown and estimation**: Software engineers take large, ambiguous problems, like "show the
   user a dashboard", and break them down into concrete, actionable tasks that allow them to track
   progress and estimate how long it will take to implement user requirements. Hackers/coders
   generally are not writing large-scale systems.
3. **Automated testing**: Software engineers work on systems that are too large to keep all the
   important behavior in one person's head. They write automated tests to ensure changes made by
   them and their coworkers in the future do not break critical functionality.
4. **System and change documentation**: Software that is "engineered" has documentation explaining
   how it works under the hood. Software engineers write clear explanations not only of the "what",
   but of the "why" in their version control systems so that their reasoning is preserved. They
   expect the software they build to be used for years, and worked on by future engineers who will
   have to understand why the system works in a certain way.
5. **Code review**: Software engineers generally work on systems that are too complicated for a
   single person to build. Code review helps catch bugs before they make it to production, and
   allows engineers to share knowledge of the system across a team.
6. **Maintenance and debugging**: Software engineers understand that other people will be running
   the code they write long after they write it. They consider future maintainability when writing
   code, as well as the ability to debug the code using things like logs, metrics, and tracing.
7. **Security, privacy, and accessibility considerations**: Software engineers work on programs that
   are important to people, and understand that the internet allows hackers to try and get into any
   software that is in some way important. They understand that as a result, they need to understand
   the security and privacy implications of code changes they make. If software engineers work on
   programs that the general public will interact with, they understand that they need to ensure
   their software is accessible to all users.
