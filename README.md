# Purpose

Apparently, you're not a real engineer unless you put a bunch of code up for others 
to see and judge, and since all of my work in my career has been IP and NDA protected, 
I generally don't have much of that code.

I also spend an incredible amount of time working on my employer's code. I don't have 
much free time to just code for myself without it becoming a maintenance nightmare. 
So, every couple years I get a break and push up code to feed whatever Eldritch 
behemoth is required to be considered a 'real developer'...

...not that successfully engineering projects over 20+ languages and tech stacks 
over the years could prove that.

## Organization

```
[0-9]+_{PROJECT_NAME}
 |
 |--> app (the actual code)
 |--> feature_specs (brd/fsd, general info, etc.)
```

## Scaffolders

### tsz (Tailwind, Shadcn, Zustand)

```
cp -R _scaffold_tsz {NEW_PROJECT}
```

### trr (Tailwind, Radix, Redux)

```
cp -R _scaffold_trr {NEW_PROJECT}
```

### start (React Starter Kit)

* Note: Jotai is used in lieu of Zustand, but can switch out

https://github.com/kriasoft/react-starter-kit/tree/3cffb5fda0bd8fed2f9278d975c7b1dc0da6c9e0/apps/app

```
cp -R _scaffold_start {NEW_PROJECT}
```

# Learning and Creating

## Project Idea Sources

- https://www.frontendmentor.io/challenges
- https://weekendwebdev.substack.com/
- https://github.com/practical-tutorials/project-based-learning#web-applications
- https://github.com/codecrafters-io/build-your-own-x

## Considerations of learning

- https://www.patterns.dev/
- https://github.com/topics/epicreact-dev
- https://micro-frontends.org/
- https://scrimba.com/learn-react-c0e
- https://www.theodinproject.com/paths

## L33t and other mess

- https://css-tricks.com/front-end-challenges/