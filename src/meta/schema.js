// @flow
/* eslint-disable no-unused-vars */

/**
 * @module envokeJS/src/meta/schema
 * @description Schema definitions for Envoke.
 */

const ENVOKE = '<envoke placeholder>';
const COALA = '<coalaip placeholder>';
const SCHEMA = 'http://schema.org/';

/**
* A person (alive, dead, undead, or fictional).
* @param {string} birthDate
* @param {string} familyName - The last name of an Person.
* @param {string} givenName - The first name of a Person.
*/
function newPerson(birthDate: string, familyName: string, givenName: string) {
  return {
    '@context': SCHEMA,
    '@type': 'Person',
    birthDate,
    familyName,
    givenName,
  };
}

/**
* An organization such as a school, NGO, corporation, club, etc.
* @param {string} name
* @param {string} description
* @param {string} email
* @param {Object[]} members
*/
function newOrganization(
  name: string, description: string, email: string,
  members: Object[],
): Object {
  return {
    '@context': SCHEMA,
    '@type': 'Organization',
    name,
    description,
    email,
    members,
  };
}

/**
* A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
* @param {string} genre
*/
function newMusicGroup(
  name: string, description: string, email: string, members: Object[],
): Object {
  return {
    '@context': SCHEMA,
    '@type': 'Organization',
    name,
    description,
    email,
    members,
  };
}

/**
* A composition represents the written music and lyrics of a musical work.
* @param {string} name
* @param {string} composerId
* @param {string} iswc
*/
function newMusicComposition(name: string, composerId: string, iswc: string): Object {
  return {
    '@context': SCHEMA,
    '@type': 'MusicComposition',
    name,
    composerId,
    iswc,
  };
}

/**
* A recording represents a recorded performance of a composition.
* @param {Artist} byArtist - The artist that performed this album or recording.
* @param {string} duration - The duration of the item in ISO 8601 date format ie 2017-03-08.
* @param {Album} inAlbum - The album to which this recording belongs.
* @param {Playlist} inPlaylist - The playlist to which this recording belongs.
* @param {string} isrc - The International Standard Recording Code for the recording.
* @param {Composition} composition - The composition this track is a recording of.
* @param {AudioObject} audio - An audio file.
*/
function newMusicRecording(
  byArtist: Object, duration: string, inAlbum: Object,
  inPlaylist: Object, isrc: string, composition: Object, audio: Object,
): Object {
  return {
    '@context': SCHEMA,
    '@type': 'MusicRecording',
    byArtist,
    duration,
    inAlbum,
    inPlaylist,
    isrc,
    composition,
    audio,
  };
}

/**
* An audio file.
* @param {string} contentUrl - Actual bytes of the media object.
* @param {string} encodingFormat - mp3, wav, flac, etc.
*/
function newAudioObject(contentUrl: string, encodingFormat: string): Object {
  return {
    '@context': SCHEMA,
    '@type': 'AudioObject',
    contentUrl,
    encodingFormat,
  };
}

/**
* An image file.
* @param {string} contentUrl - Actual bytes of the media object.
* @param {string} encodingFormat - jpeg, gif, png, etc.
*/
function newImageObject(contentUrl: string, encodingFormat: string): Object {
  return {
    '@context': SCHEMA,
    '@type': 'ImageObject',
    contentUrl,
    encodingFormat,
  };
}

/**
* A collection of music tracks in playlist form.
* @param {Recording[]} tracks
*/
function newMusicPlaylist(tracks): Object {
  return {
    '@context': SCHEMA,
    '@type': 'MusicPlaylist',
    tracks,
  };
}

/**
* A collection of music tracks.
* @param {string} productionType - soundtrack, live album, studio album, etc.
* @param {Release} release - a release of this album
* @param {string} releaseType - The kind of release which this album is: single, EP or LP
* @param {Artist} artist - The artist that performed this album or recording.
*/
function newMusicAlbum(
  tracks: Object[], productionType: string,
  release: Object, releaseType: string, artist: Object,
): Object {
  return {
    '@context': SCHEMA,
    '@type': 'MusicAlbum',
    tracks,
    productionType,
    release,
    releaseType,
    artist,
  };
}

/**
* A MusicRelease is a specific release of a music album.
* @param {Object} tracks - The catalog number for the release.
* @param {string} catalogNumber - The catalog number for the release.
* @param {string} duration - The duration of the item in ISO 8601 date format ie 2017-03-08.
* @param {string} musicReleaseFormat - digital, vinyl, tape, compact disc, etc.
* @param {Organization} recordLabel - The label that issued the release.
* @param {Album} releaseOf - The album this is a release of.
*/
function newMusicRelease(
  tracks: Object[], catalogNumber: string, duration: string,
  musicReleaseFormat: string, recordLabel: Object, releaseOf: Object,
): Object {
  return {
    '@context': SCHEMA,
    '@type': 'MusicRelease',
    tracks,
    catalogNumber,
    duration,
    musicReleaseFormat,
    recordLabel,
    releaseOf,
  };
}

/**
* A composition right indicates ownership of a composition.
* The amount in the transaction output specifies the percentage shares.
* @param {string} compositionId
* @param {number} percentageShares - percentage of ownership between 0 and 100.
* @param {string} validFrom
* @param {string} validThrough
* @param {string[]} territories - country codes.
*/
function newMusicCompositionRight(
  compositionId: string, percentageShares: number, validFrom: string,
  validThrough: string, territories: string[],
): Object {
  return {
    '@context': SCHEMA,
    '@type': 'MusicCompositionRight',
    compositionId,
    percentageShares,
    validFrom,
    validThrough,
    territories,
  };
}
