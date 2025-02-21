export enum MODE {
    production = "production",
    development = "development"
  }

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: MODE,
    paths: BuildPaths,
    isDev: boolean
}