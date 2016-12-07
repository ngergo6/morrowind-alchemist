const workers: IWorkerPath[] = [
    {
        path: "./../offline-sw.js",
        scope: "./../"
    }
];

export async function register(): Promise<ServiceWorkerRegistration[]> {
    if (!isSwSupported()) {
        return Promise.reject(new Error("Service workers are not supported."));
    }

    return Promise.all(
        workers.map((path: IWorkerPath) => registerWorker(path))    
    );
}

function registerWorker(path: IWorkerPath): Promise<ServiceWorkerRegistration> {
    return navigator.serviceWorker.register(path.path, { scope: path.scope });
}

function isSwSupported(): boolean {
    return "serviceWorker" in window.navigator;
}

interface IWorkerPath {
    path: string,
    scope: string
}