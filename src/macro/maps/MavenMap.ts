
export const MAVEN_COMMANDS = {
    VERSION: {
        newVersion: "versions:set -DnewVersion",
        nextSnapshotVersion: "versions:set -DnextSnapshot=true",
        releaseVersion: "versions:set -DremoveSnapshot=true",
        commitVersion: "versions:commit"
    },
    BUILD: {
        clean: "clean",
        package: "package",
        install: "install",
        deploy: "deploy",
        
        FLAGS: {
            skipTests: "-DskipTests=true"
        }
    }
}