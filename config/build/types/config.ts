export enum MODE {
    production = "production",
    development = "development"
  }

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: MODE;
    port: number
}

export interface BuildOptions {
    mode: MODE,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
}