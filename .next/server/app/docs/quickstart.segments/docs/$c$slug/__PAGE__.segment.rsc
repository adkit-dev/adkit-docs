1:"$Sreact.fragment"
2:I[79912,["/_next/static/chunks/ccf93c344c59b10d.js","/_next/static/chunks/c0662c918a2af466.js","/_next/static/chunks/24ac5891ba0c4699.js","/_next/static/chunks/9cafa863efb7e2bf.js","/_next/static/chunks/59f283aba722abe9.js","/_next/static/chunks/cc190b4d23051e3a.js","/_next/static/chunks/10623e2afbf6a84c.js"],"DocContent",1]
4:I[70582,["/_next/static/chunks/67e7214feabe1636.js","/_next/static/chunks/7f5cc694ea9b4ee4.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:T436,## Install the SDK

Choose your preferred installation method:

### JavaScript (Recommended for most sites)

Add the Adkit script to your HTML:

```html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
```

### React / Next.js

Install the React package:

```bash
npm install adkit-react
```

## Add Your First Slot

### JavaScript

```html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
></div>
```

### React

```tsx
import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"

function App() {
  return (
    <AdkitProvider siteId="your-site-id">
      <AdSlot slot="sidebar" aspectRatio="4:3" />
    </AdkitProvider>
  )
}
```

## Get Your Site ID

1. Sign up at [adkit.dev](https://adkit.dev)
2. Create a new site in your dashboard
3. Copy your site ID from the settings page

## Next Steps

- Configure your slot pricing in the [Publisher Dashboard](/docs/publisher/dashboard)
- Customize the appearance with [Theming](/docs/react/theming)
- Learn about [How It Works](/docs/how-it-works)0:{"buildId":"OG8eCAthKGUJyzKMGQdxl","rsc":["$","$1","c",{"children":[["$","$L2",null,{"title":"Quickstart","description":"Get Adkit running on your site in under 10 minutes.","content":"$3","slug":"quickstart"}],[["$","script","script-0",{"src":"/_next/static/chunks/10623e2afbf6a84c.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
