# Online Product Listing UI

This is a simple tool built with React and Chakra UI that uses the Open AI [chat completion API](https://platform.openai.com/docs/guides/completion) to extract the best keywords from any given text.

<div style="text-align:center">
<img src="screenshot.png" width="500">
</div>

# How to use
## Get the source
```bash 
$ git clone https://github.com/vatsaaa/oplui.git
```

<strong>OR</strong>

Download the source code without from [here](https://github.com/vatsaaa/oplui/archive/refs/heads/main.zip)

## Local
### Install dependencies
```bash
$ npm install
```

Rename `.env.example` to `.env` and add your API key. You can get your key at [OpenAI API](https://platform.openai.com/account/api-keys).

```bash
VITE_OPL_API_KEY='ADD_YOUR_KEY_HERE'
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend to it and store the API key there.

### Run in dev mode:
#### Start local API (only for dev mode)
```bash
$ echo "VITE_DEV=true" >> .env
```
#### Provision a fresh database
```bash
$ node tools/createMockDb.js 
```
#### Start local API
```bash
$ node tools/apiServer.js
```
#### Start the UI:
```bash
$ npm run dev
```

Open this [link](http://localhost:3000) with your browser to see the result.

### Check for production mode readiness
#### Build for production:
```bash
$ npm run build
```
#### Preview production distributable
```bash
npm run preview
```

## Containers
### Build production container
```bash
$ docker build -f Dockerfile.prd -t opl-ui-img-0107052023 .
```
### Run production container
```bash
$ docker run --rm -d -p 3000:80 opl-ui-img-0107052023
```
### Build development container
```bash
$ docker build -f Dockerfile.dev -t opl-ui-img-0107052023 .
```

Application is server [here](https://localhost:3000)

### Run development server
```bash
$ docker run --rm -v $(pwd)/src:/app/src:ro -d -p 3000:5173 opl-ui-img-06052023
```

**For windows
1. Consider using Power Shell and replace $(pwd) with %cd%
2. If for any reason you cannot, replace $(pwd)/src with the absolute path of src folder
3. Replace / with \ as needed
4. Use this run command `docker run --rm -e CHOKIDAR_USEPOLLING=true -v $(pwd)/src:/app/src:ro -d -p 3000:5173 opl-ui-img-06052023`
**

Now, you can edit files on your local and they will be reflected in the container and on your running local instance.

## Handy docker commands
### Attach to a running server
`docker exec -i -t <container-name-or-id> <shell-executable>`

-i: keep STDIN (standard input) open 
-t: attach a pseudo-TTY (terminal) to the container's shell

### Some docker flags explained
Application is served [here](https://localhost:3000)

-v: is bind mount volume mapping
-p: port forwarding from local to container
:ro - is read-only, which prevents container saving files to your directory
-e: flag can be used to pass environment variables
--env-file <env-filename-with-path>: pass environment variables from a file

## Chakra UI
[Chakra UI crash course](https://www.youtube.com/watch?v=iXsM6NkEmFc&list=PL4cUxeGkcC9hcnIeryurNMMcGBHp7AYlP)

## License

MIT License

## References
[Working with axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/#axiospost)
[Dockerize your React app](https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e)
[CI/CD workflow on GitHub for React app](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)
[Container Security](https://anchore.com/blog/docker-security-best-practices-a-complete-guide/)
https://www.kinetica.com/blog/gpus-transformed-xva-pricing-risk-calculations/
https://financialit.net/news/cloud/hsbc-counterparty-credit-risk-and-valuation-adjustments-google-cloud-case-study
https://www.linkedin.com/pulse/blueprint-enterprise-architecture-richard-moran/
https://blog.protiviti.com/2018/07/02/blueprint-change-capability-reference-architecture-can-help-map-road-organizational-transformation-part-1-2/
https://www.leanix.net/en/wiki/ea/reference-architecture
[Implementing the Strategy Pattern using LLMs](https://blackhc.github.io/llm-strategy/)
[5 Tools for Effortless Data Science](https://www.kdnuggets.com/2021/01/5-tools-effortless-data-science.html)
[How Large Language Models Will Revolutionize Software Engineering](https://blog.blackhc.net/2022/12/llm_software_engineering/)
[Chatbot with Langchain and Pinecone](https://www.pinecone.io/learn/javascript-chatbot/)
[Chunking Strategies](https://www.pinecone.io/learn/chunking-strategies/)