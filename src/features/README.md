# features

The massive change between these two structures is the **_features_** folder. This folder works very similarly to the **_pages_** folder from the intermediate structure, but instead of grouping by page we are instead grouping by feature. Already this is easier to understand as a developer since in 90% of cases when you are going to add new code to a project you are either going to implement a new feature, such as adding user accounts, or you are going to modify an existing feature, such as adding the ability to edit todos. This makes working with the code easier since all the code for each feature is collocated in the same place making it easy to update and add to.

The actual structure of this folder follows the **_pages_** structure in that there are individual folders for each feature (authentication, todos, projects, etc.) and inside those folders are all the files for that feature. The biggest difference you will notice between the **_pages_** folder and the **_features_** folder, though, is that within each feature you have another set of folders. This folder structure for each feature is a complete copy of all the folders inside the **_src_** folder (other than the **_features_** folder obviously) and an **_index.js_** file. This means that within your feature all your code can be organized by type (context, hook, etc.) while still be collocated together.

The **_index.js_** file is then used as a way to expose a public API for everything that is usable outside the feature folder for that given feature. It is common that you will want to have a bunch of code that is private to the specific feature you are working on, but with JS if you create an export in a file it can be used in any other file you want. In larger projects this can become a problem if we only want to expose a few components/methods for our feature which is where the **_index.js_** file comes in. This file should export only the code you want to be accessible outside the feature and then every time you use code for this feature in your application you should import it from the **_index.js_** file. Doing this is really nice since your global code footprint is much smaller this way and using the features becomes easier since you have a limited API to work with. This can even be enforced by an ESLint rule which disallows any import from a feature folder that doesn't come from **_index.js_**.

```javascript
{
  "rules": {
    "no-restricted-imports": [
      "error", { "patterns": ["@/features/*/*"] }
    ]
  }
}
```

Above code from Bullet Proof React.

This import rules utilizes absolute imports (which I recommend using on larger projects). You can set this up by using a .jsconfig or .tsconfig file with the following code.

```javascript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@features/*": ["src/features/*"],
    }
  }
}
```
