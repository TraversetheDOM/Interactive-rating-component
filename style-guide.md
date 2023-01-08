# Styleguide 


## Google Fonts Link 
``` html
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
```


## Typography 
```css
--ff-Overpass: 'Overpass', sans-serif;
--fw-100: 100; 
--fw-200: 200;
--fw-300: 300; 
--fw-400: 400; 
--fw-500: 500; 
--fw-600: 600;
--fw-700: 700; 
--fw-800: 800; 
--fw-900: 900; 
--letter-spacing-tighter: -0.05em; 
--letter-spacing-tight: -0.025em; 
--letter-spacing-normal: 0em; 
--letter-spacing-wide: 0.025em; 
--letter-spacing-wider: 0.05em; 
--letter-spacing-widest: 0.1em; 

/* Type Scale of a Major Second 1.125 */
--fs-1: clamp(1.408rem, calc(1.36rem + 0.17vw), 1.6rem);
--fs-2: clamp(1.57rem, calc(1.49rem + 0.35vw), 2.0rem);
--fs-3: clamp(1.78rem, calc(1.63rem + 0.60vw), 2.50rem);
--fs-4: clamp(2.00rem, calc(1.78rem + 0.94vw), 3.12rem);
--fs-5: clamp(2.24rem, calc(1.92rem + 1.37vw), 3.90rem);
```


## Color
```css
--orange: hsl(25, 97%, 53%); 
--white: hsl(0, 0%, 100%); 
--light-grey: hsl(217, 12%, 63%);
--medium-grey: hsl(216, 12%, 54%); 
--dark-grey: hsl(213, 19%, 18%); 
--very-dark-grey:  hsl(216, 12%, 8%); 
```


## Spacing (Margins and Paddings)
```css
--space-1: clamp(0.40rem, calc(0.40rem + 0.00vw), 0.40rem);
--space-2: clamp(0.70rem, calc(0.69rem + 0.08vw), 0.80rem);
--space-3: clamp(1.10rem, calc(1.09rem + 0.08vw), 1.20rem);
--space-4: clamp(1.41rem, calc(1.28rem + 0.17vw), 1.60rem);
--space-5: clamp(2.10rem, calc(2.05rem + 0.25vw), 2.40rem);
--space-6: clamp(2.8rem, calc(2.72rem + 0.33vw), 3.20rem);
--space-6: clamp(4.21rem, calc(4.08rem + 0.50vw), 4.80rem);
--space-7: clamp(5.6rem, calc(5.44rem + 0.66vw), 6.4rem);
--space-8: clamp(8.4rem, calc(8.18rem + 0.99vw), 9.6rem);
--space-9: clamp(0.40rem, calc(0.40rem + 0.33vw), 0.80rem);
--space-10: clamp(0.70rem, calc(0.61rem + 0.41vw), 1.20rem);
--space-11: clamp(1.10rem, calc(1.01rem + 0.41vw), 1.60rem);
--space-12: clamp(1.41rem, calc(1.22rem + 0.83vw), 2.40rem);
--space-13: clamp(2.10rem, calc(1.89rem + 0.91vw), 3.2rem);
--space-14: clamp(2.80rem, calc(2.42rem + 1.65vw), 4.80rem);
--space-15: clamp(4.21rem, calc(3.78rem + 1.82vw), 6.4rem);
--space-16: clamp(5.6rem, calc(4.83rem + 3.31vw), 9.60rem);
--space-17: clamp(1.41rem, calc(1.06rem + 1.49vw), 3.20rem);
--space-18: clamp(1.10rem, calc(0.85rem + 1.07vw), 2.40rem);
```


## Radius
```css
--radius-1: 2px; 
--radius-2: 4px; 
--radius-3: 6px;
--radius-4: 8px; 
--radius-5: 12px; 
--radius-6: 16px; 
--radius-7: 22.5px; 
--radous-7: 24px; 
```


## Transition

```css
--transition-color: color 2s ease-in; 
```


## Line-Height 
```css
--line-height-none: 1; 
--line-height-tight: 1.25; 
--line-height-snug: 1.375; 
--line-height-normal: 1.5; 
--line-height-relaxed: 1.625; 
--line-hieght-loose: 2; 
```


## Display 
```css
--hidden: none; 
--block: block; 
--inline: inline; 
--inline-block: inline-block; 
--flex: flex;
--inline-flex: inline-flex; 
--grid: grid; 
--inline-grid: inline-grid; 
```

## Gap 
```css
--gap-0: 0px; 
--gap-1: 1px; 
--gap-1_25: 0.125rem; 
--gap-2_5: 0.25rem; 
--gap-3_75: 0.375rem; 
--gap-5: 0.5rem; 
--gap-6_25: 0.625rem; 
--gap-7_5: 0.75rem; 
--gap-8_75: 0.875rem; 
--gap-10: 1rem; 
--gap-12_5: 1.25rem; 
--gap-15: 1.5rem; 
--gap-17_5: 1.75rem; 
--gap-20: 2rem; 
--gap-22_5: 2.25rem; 
--gap-27_5: 2.75rem; 
--gap-30: 3rem;
--gap-35: 3.5rem; 
--gap-40: 4rem; 
--gap-50: 5rem; 
--gap-60: 6rem; 
--gap-70: 7rem; 
--gap-80: 8rem; 
--gap-90: 9rem; 
--gap-100: 10rem; 
--gap-110: 11rem; 
--gap-120: 12rem; 
--gap-130: 13rem; 
--gap-140: 14rem; 
--gap-150: 15rem; 
--gap-160: 16rem; 
--gap-180: 18rem; 
--gap-200: 20rem; 
--gap-240: 24rem; 
```