#

## Quick resources

(flexbox)[https://css-tricks.com/snippets/css/a-guide-to-flexbox/]

### adding css to all <li> items

.ul > li {
padding: 10px;
}

### adding css to nested h3 <nav><h3></h3></nav>

```css
nav > h3 {
  padding: 10px;
}
```

### notable css

```css
margin-right: 7px / auto;
margin: 0;
```

#### navbar

```css
.navbar {
  display: flex;
  background-color: #000;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
}
```

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar--logo {
  height: auto;
  width: auto;
  max-height: 50px;
  max-width: 50px;
}
```

### flexbox

(MDN)[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox]

#### horizontal scroll

```css
.cards-list {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
}

.card {
  width: 175px;
  font-size: 12px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}
```

### position relative vs position absolute

- set background to position relative
- set foreground object to position absolute

### image resizing for e.g. navbar

```css
.img-responsive {
  height: auto;
  width: auto;
  max-height: 72px;
  max-width: 250px;
}
```

### small nav like bar
```html
    <div className="card--stats">   
        <img src="../images/star.png" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
    </div>
```
```css
.card--stats {
    display: flex;
    align-items: center;
}

.card--star {
    height: 14px;
}
```
<!-- line-height: 72px; /* whatever the fixed height of the bar is */
vertical-align: middle; -->
