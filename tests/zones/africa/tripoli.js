"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Tripoli"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Tripoli", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Tripoli", { abbr: true, expect: "Africa/Cairo" }),

	"1951" : helpers.makeTestYear("Africa/Tripoli", [
		["1951-10-14T00:59:59+00:00", "01:59:59", "CET", -60],
		["1951-10-14T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1951-12-31T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1951-12-31T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1953" : helpers.makeTestYear("Africa/Tripoli", [
		["1953-10-09T00:59:59+00:00", "01:59:59", "CET", -60],
		["1953-10-09T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1953-12-31T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1953-12-31T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1955" : helpers.makeTestYear("Africa/Tripoli", [
		["1955-09-29T22:59:59+00:00", "23:59:59", "CET", -60],
		["1955-09-29T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1955-12-31T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1955-12-31T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1958" : helpers.makeTestYear("Africa/Tripoli", [
		["1958-12-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1958-12-31T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1981" : helpers.makeTestYear("Africa/Tripoli", [
		["1981-12-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1981-12-31T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1982" : helpers.makeTestYear("Africa/Tripoli", [
		["1982-03-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1982-03-31T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1982-09-30T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1982-09-30T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1983" : helpers.makeTestYear("Africa/Tripoli", [
		["1983-03-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1983-03-31T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1983-09-30T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1983-09-30T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1984" : helpers.makeTestYear("Africa/Tripoli", [
		["1984-03-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1984-03-31T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1984-09-30T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1984-09-30T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1985" : helpers.makeTestYear("Africa/Tripoli", [
		["1985-04-05T22:59:59+00:00", "23:59:59", "CET", -60],
		["1985-04-05T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1985-09-30T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1985-09-30T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1986" : helpers.makeTestYear("Africa/Tripoli", [
		["1986-04-03T22:59:59+00:00", "23:59:59", "CET", -60],
		["1986-04-03T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1986-10-02T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1986-10-02T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1987" : helpers.makeTestYear("Africa/Tripoli", [
		["1987-03-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1987-03-31T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1987-09-30T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1987-09-30T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1988" : helpers.makeTestYear("Africa/Tripoli", [
		["1988-03-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1988-03-31T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1988-09-30T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1988-09-30T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1989" : helpers.makeTestYear("Africa/Tripoli", [
		["1989-03-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1989-03-31T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1989-09-30T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1989-09-30T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1990" : helpers.makeTestYear("Africa/Tripoli", [
		["1990-05-03T22:59:59+00:00", "23:59:59", "CET", -60],
		["1990-05-03T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1996" : helpers.makeTestYear("Africa/Tripoli", [
		["1996-09-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["1996-09-29T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1997" : helpers.makeTestYear("Africa/Tripoli", [
		["1997-04-03T22:59:59+00:00", "23:59:59", "CET", -60],
		["1997-04-03T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1997-10-03T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1997-10-03T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"2012" : helpers.makeTestYear("Africa/Tripoli", [
		["2012-11-09T23:59:59+00:00", "01:59:59", "EET", -120],
		["2012-11-10T00:00:00+00:00", "01:00:00", "CET", -60]
	]),

	"2013" : helpers.makeTestYear("Africa/Tripoli", [
		["2013-03-28T23:59:59+00:00", "00:59:59", "CET", -60],
		["2013-03-29T00:00:00+00:00", "02:00:00", "CEST", -120]
	])
};