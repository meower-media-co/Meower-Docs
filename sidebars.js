/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	objects: [{type: "autogenerated", dirName: "objects"}],
	cloudlink: [
		"cloudlink/intro",
		{
			type: "category",
			label: "Commands",
			items: [{type: "autogenerated", dirName: "cloudlink/commands"}],
		},
		{
			type: "category",
			label: "Packets",
			items: [{type: "autogenerated", dirName: "cloudlink/packets"}],
		},
	],
	// TODO: Does it make sense for everything to be under rest-api/intro?
	restApi: [{type: "autogenerated", dirName: "rest-api/intro"}],
};

module.exports = sidebars;
