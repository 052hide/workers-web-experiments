import { PiercingGateway } from "piercing-library";
import { getCurrentUser, getTodoLists } from "shared";

export interface Env {
  APP_BASE_URL: string;
}

const gateway = new PiercingGateway<Env>({
  getLegacyAppBaseUrl(env) {
    return env.APP_BASE_URL;
  },
  shouldPiercingBeEnabled(request: Request) {
    const match = request.headers
      .get("Cookie")
      ?.match(/piercingEnabled=(true|false)/);
    const piercingEnabled = !match ? null : match[1] === "true" ? true : false;
    return piercingEnabled === null ? true : piercingEnabled;
  },
  async generateMessageBusState(requestMessageBusState, request) {
    const requestCookie = request.headers.get("Cookie");
    const currentUser = requestCookie
      ? await getCurrentUser(requestCookie)
      : null;

    if (!("authentication" in requestMessageBusState)) {
      requestMessageBusState["authentication"] = {
        username: currentUser,
      };
    }

    if (!("todo-list-selected" in requestMessageBusState) && currentUser) {
      const match = /\/todos\/([^/]+)$/.exec(request.url);
      let listName = match?.[1] && decodeURIComponent(match[1]);

      const lists = await getTodoLists(currentUser, requestCookie!);
      // make sure that the provided listName is the name of an existing list
      listName = lists.find(({ name }) => name === listName)?.name;

      if (!listName) {
        if (lists.length) {
          listName = lists[lists.length - 1].name;
        }
      }

      if (!listName) {
        throw new Error(
          "Programming error: There should always be at least one list present for any user"
        );
      }

      requestMessageBusState["todo-list-selected"] = { name: listName };
    }
    return requestMessageBusState;
  },
});


async function isUserAuthenticated(request: Request) {
  const currentUser = await getCurrentUser(request.headers.get("Cookie") || "");
  return !!currentUser;
}

gateway.registerFragment({
  fragmentId: "login",
  prePiercingStyles: `
    :not(piercing-fragment-outlet) > piercing-fragment-host {
      position: absolute;
      top: 10.45rem;
      left: 1rem;
      right: 1rem;
    }

    @media (max-width: 45rem) {
      :not(piercing-fragment-outlet) > piercing-fragment-host {
        top: 10.58rem;
      }
    }
    @media (max-width: 35rem) {
      :not(piercing-fragment-outlet) > piercing-fragment-host {
        top: 13.06rem;
      }
    }
    @media (max-width: 25rem) {
      :not(piercing-fragment-outlet) > piercing-fragment-host {
        top: 13.24rem;
      }
    }
    `,
  async shouldBeIncluded(request: Request) {
    return !(await isUserAuthenticated(request));
  },
});

export default gateway;
