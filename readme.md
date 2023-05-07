# Online Product Listing UI

This is a simple tool built with React and Chakra UI that uses the Open AI [chat completion API](https://platform.openai.com/docs/guides/completion) to extract the best keywords from any given text.

<div style="text-align:center">
<img src="screenshot.png" width="500">
</div>

# How to use
## Get the source
```bash 
git clone https://github.com/vatsaaa/oplui.git
```

<strong>OR</strong>

Download the source code without from [here](https://github.com/vatsaaa/oplui/archive/refs/heads/main.zip)

## Local
### Install dependencies
```bash
npm install
```

Rename `.env.example` to `.env` and add your API key. You can get your key at [OpenAI API](https://platform.openai.com/account/api-keys).

```bash
VITE_OPL_API_KEY='ADD_YOUR_KEY_HERE'
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend to it and store the API key there.

### Run the dev server:

```bash
npm run dev
```

Open this [link](http://localhost:3000) with your browser to see the result.

### Build for production:

```bash
npm run build
```

## Containers
### Build production container
```bash
docker build -f Dockerfile.prd -t opl-ui-img-0107052023 .
```

### Run production container
```bash
docker run --rm -d -p 3000:80 opl-ui-img-0107052023
```

### Build development container
```bash
docker build -f Dockerfile.dev -t opl-ui-img-0107052023 .
```

Application is server [here](https://localhost:3000)

### Run development server
```bash
docker run --rm -v $(pwd)/src:/app/src:ro -d -p 3000:5173 opl-ui-img-06052023
```

You can edit files on your local and they will be reflected in the container and on your running local instance.

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
[Dockerize your React app](https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e)
[CI/CD workflow on GitHub for React app](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)
[Container Security](https://anchore.com/blog/docker-security-best-practices-a-complete-guide/)