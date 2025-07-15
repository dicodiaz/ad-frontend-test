<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🗝️ Key Features](#key-features)
  - [🛠️ Built With](#built-with)
- [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [📝 License](#license)

# 📖 Frontend Technical Test <a name="about-project"></a>

Welcome to the Frontend Technical Test! This test is designed to assess your knowledge and skills in frontend development.

The detailed instructions and requirements for this test are defined in the [`CHALLENGE.md`](/CHALLENGE.md) file. Please read it carefully before you start.

Good luck!

## 🗝️ Key Features <a name="key-features"></a>

### General

- Games added to the cart persist on local storage.
- The web app is deployed to Vercel.
- The web app has a responsive design.
- Implements unit testing.
- Does not use any 3rd party components like Material-ui, Shadcn-ui, etc. Use the TailwindCSS config file for colors, etc.
- In the footer, the Apply Digital logo redirects you to the route "/".
- The header has two navigation elements, a logo that redirects you to "/" and a cart icon to "/cart".

### Catalog Page

- The page has a loading indicator.
- The selected "genre" filter persists on the url and is used when querying the results if the page is visited for the first time using these parameters.
- When clicking on the "Add To Cart" button, the game is added to the Cart.
- If the item is added to cart, the button says "Remove" and if clicked it removes the item from the cart.
- The ¨See more¨ button shows when not on the last page and if clicked it fetches the next page.
- The "genre" filter selector is using the native select element.

### Cart Page

- It displays every item added to the cart, including `name`, `description`, `price`, `image`, `genre`, and the "New" label using the `isNew` attribute.
- The "X" button on each item removes it from the cart.
- The Order Summary section displays the items quantity, each item's price and the order total.
- It displays a "Back to Catalog" button that takes back to "/".

## 🛠️ Built With <a name="built-with"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://nextjs.org/">Next.js</a></li>
  </ul>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [https://ad-frontend-test-murex.vercel.app/](https://ad-frontend-test-murex.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Install [Node.js](https://nodejs.org/en)
- Install [pnpm](https://pnpm.io/installation)

### Setup

Clone this repository to your desired folder:

```sh
  git clone https://github.com/dicodiaz/ad-frontend-test.git
```

### Install

Install this project with:

```sh
  cd ad-frontend-test
  pnpm i
```

### Usage

To run the project, execute the following commands:

```sh
  pnpm dev
```

### Deployment

There's a CD pipeline set up to track the `main` branch.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Dico Diaz Dussan**

- GitHub: [@dicodiaz](https://github.com/dicodiaz)
- LinkedIn: [Dico Diaz Dussan](https://www.linkedin.com/in/dico-diaz-dussan/)
- Portfolio: [portfolio.dicodiaz.com.co](https://portfolio.dicodiaz.com.co)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Please open a PR from your feature branch to `main` in order to contribute.

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
