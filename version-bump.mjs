import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'

const targetVersion = process.env.npm_package_version

function r(p) {
  return resolve(import.meta.dirname, p)
}

// read minAppVersion from manifest.json and bump version to target version
let manifest = JSON.parse(readFileSync(r('manifest.json'), 'utf8'))
const { minAppVersion } = manifest
manifest.version = targetVersion
writeFileSync('manifest.json', JSON.stringify(manifest, null, '\t'))

// update versions.json with target version and minAppVersion from manifest.json
let versions = JSON.parse(readFileSync(r('versions.json'), 'utf8'))
versions[targetVersion] = minAppVersion
writeFileSync('versions.json', JSON.stringify(versions, null, '\t'))
