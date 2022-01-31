## 🧐 assets: <a name = "tests"></a>

includes all images, icons and logos for this project

## 🏁 atoms: <a name = "tests"></a>

handles the unique state of the application through atomized and smaller particle atoms

## ⛏️ Components: <a name = "built_using"></a>

- CardPayment: Render a card with payments information.

- Payments: I received the data and it is processed by each payments card one by one, it acts as a container.

- Copyright: Shows the copyright on the development of this project.

- FormOrder: Shows all tabs for complete order. This component call to

```
TabButton, CustomerInformation, TermsAndConditions, PaymentSelection, SelectedPlanView, SubtotalView, CreditCardPreview, OrderSummary,
```

- FormSign: Show a modal with an authentication form to be able to add favorite payments.

- LoadMore: It shows a button that will perform the function of making the request to obtain more paymentss.

- Modal: Show an overlay with a frame, which takes another component as a children and renders it internally.

- NavBar: it shows a navigation bar in the header with the access ones.

- NotFound: When the search field is searched by filter and there are no matches, it displays information that says there are no matches.

- PrivateRoute: This component is responsible for making routes private depending on whether the user is authenticated.

- SearchBar: In the search bar you can enter a text and it searches for matches on the paymentss that are currently displayed. The search is done at the frontend level - locally on the payments object array.

- TextButton: It is responsible for showing a button of type submit or button as appropriate with its own styles.

- TextField: It is responsible for displaying a text field with its own styles.

## 🔧 constants: <a name = "tests"></a>

the access paths to the endpoints are defined

## 🔧 hooks: <a name = "tests"></a>

They act as container components that house and isolate the business logic from the presentational components.

## 🔧 views: <a name = "tests"></a>

They are access views to the pages configured in the route system with react-route-dom.

## 🔧 services: <a name = "tests"></a>

They host the definition of asynchronous functions that execute promises to retrieve data or affect certain information.

## 🔧 styleguide: <a name = "tests"></a>

Stores files that have to do with the configuration of themes for the application such as common colors in each of the elements.

## 🔧 utils: <a name = "tests"></a>

Stores functions that act as pipes and that are used in some type of data to show within the render.

## 🚀 Ejecutar asi: <a name = "deployment"></a>

```
npm run fake-api
```

```
npm run start
```

Testing with those credentials:

```
view the next file: data/db.json in sheme users
```

```
thomas.anderson@gmail.com
123456
```
