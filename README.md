# SSR react app with CSR

A basic todo app with ssr and csr react app with webpack configuration

## Used libraries
  
  
 * React, React-dom and React-router-dom  for client and server side rendering.
 
 
 * compression, cors, express and serialize-javascript for node js server.
 
 ### commands
 
 for development purpose use
 ```ecmascript 6
npm run start-dev
```

for production purpose use
```ecmascript 6
npm run start-prod
```

and for starting the bundle analyzer during the production build uncomment the line from the webpack config

```ecmascript 6
57:    new webpack.ProvidePlugin({
58:      React: 'react'
59:    })
60:    // new BundleAnalyzerPlugin()  /* uncomment this line */
61:  ],
```