---
hidden: false # If ommited, will be false. Hides the post from the Navigation and URL
slug: test-post # Unique url slug to get to the page
title: Test Post # The title displayed in navigation and in the post page
description: Describe this awesome content # A small description
date: Today # Date, will display as a string, type whatever you want
author: Dylan Hobbs # Name that will appear in the byline
tags:
  - "great"
  - "awesome"
  - "rad"
---

## Test Post Number 1

### Text
**Lorem ipsum** *dolor sit amet*, consectetur adipiscing elit. Morbi purus nisl, scelerisque mattis neque non, elementum tempus lacus. Pellentesque placerat purus sit amet feugiat cursus. Curabitur nisl metus, consectetur id elementum vel, mollis id nisl. In id mattis dolor, ac faucibus dolor. Vestibulum vitae sem eget leo faucibus imperdiet. Duis sed nunc at mi scelerisque dictum. Donec hendrerit faucibus varius. Aliquam aliquam, sem aliquam facilisis porttitor, ipsum diam lacinia est, ut auctor nisl magna ac quam. Sed aliquam lectus lacus, ac efficitur orci tincidunt sed. Donec eleifend, nisi et faucibus laoreet, tellus neque aliquet dolor, sed hendrerit lacus nulla sit amet urna. Sed sagittis fermentum libero vitae lacinia. Nam elementum vulputate neque non tincidunt. Mauris dictum massa nibh, ut viverra nunc faucibus ac. Mauris egestas pretium neque, in tempor dolor. Pellentesque a interdum ex. Vivamus tincidunt dolor non quam ultrices commodo.

### Tables
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |


### Images
To add images just add them to the `/public` folder. You can create subfolders in there to organise them.
You use an absoute path to reference the images. Like so:

![image info](/testProject/image.jpg)

### Quotes
> They hung in the air the same way that bricks don't.

### Lists
1. First item
2. Second item
3. Third item
4. Forth item

- First item
- Second item
- Third item
- Forth item

### Code Blocks
```javascript
const Test = () => {
  return (
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Do it.</a>
  )
}
```