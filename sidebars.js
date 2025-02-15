/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'README',
    {
      type: 'category',
      label: 'Stake Pool Guides',
      link:{
        type: 'generated-index',
        title: 'Stake Pool Guides',
        slug: '/stake-pool-guides/',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          collapsible: true,
          label: 'Pi-Node Full-Guide (Ubuntu Server)',
          link:{
            type: 'generated-index',
            title: 'Pi-Node Full-Guide (Ubuntu Server)',
            slug: 'stake-pool-guides/pi-node-full-guide/',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label:'Introduction & Hardware',
              id: 'stake-pool-guides/pi-pool-tutorial/README'
            },
            'stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-write-it',
            'stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/logging-in-securely',
            'stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup',
            'stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup',
            'stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/environment-setup'
          ],
        },
        'stake-pool-guides/pi-pool-tutorial/pi-node',
        'stake-pool-guides/pi-pool-tutorial/pi-relay',
        'stake-pool-guides/pi-pool-tutorial/core-online',
        'stake-pool-guides/pi-pool-tutorial/cold-offline',
        'stake-pool-guides/pi-pool-tutorial/rotate-kes',
        'stake-pool-guides/pi-pool-tutorial/update-registration-cert',
        {
          type: 'doc',
          label: 'Stakepool Operator Scripts Guide',
          id: 'stake-pool-guides/pi-pool-tutorial/stakepoolscripts'
        },
        {
          type: 'doc',
          label: 'Docker Image (Arm64)',
          id:'stake-pool-guides/docker-pool-guide'
        },
        {
          type:'doc',
          label: 'Pi-Node (Raspberry Pi OS Desktop Guide) 🍓',
          id: 'stake-pool-guides/Raspberry-pi-os'
        },
        'stake-pool-guides/alpine-linux-os',
        {
          type: 'category',
          label: 'Apple M1 macOS 🍏',
          link:{
            type: 'generated-index',
            title: 'Apple M1 macOS 🍏',
            slug: '/stake-pool-guides/apple-m1-guide/',
            keywords: ['guides'],
          },
          items:[
            {
              type: 'doc',
              label: 'Introduction',
              id: 'stake-pool-guides/m1-native-macos-11-build/README'
            },
            'stake-pool-guides/m1-native-macos-11-build/node-build',
            'stake-pool-guides/m1-native-macos-11-build/finishing-up'
          ]
        },
        'stake-pool-guides/basic-stake-pool-networking',
        'stake-pool-guides/add-adapools-info-to-grafana',
        {
          type: 'category',
          collapsible: true,
          label: 'Updating a Cardano Node',
          link:{
            type: 'generated-index',
            title: 'Updating a Cardano Node',
            slug: '/stake-pool-guides/updating-a-cardano-node',
            keywords: ['guides'],
          },
          items: [
              'stake-pool-guides/updating-a-cardano-node/using-dynamic-build',
              'stake-pool-guides/updating-a-cardano-node/static-build'
          ]
        },
        'stake-pool-guides/leader-logs',
        'stake-pool-guides/wireguard-guide',
        'stake-pool-guides/grafana-alerts-with-telegram'
      ],
    },
    {
      type: 'category',
      label: 'Other Cardano Guides',
      link:{
        type: 'generated-index',
        title: 'Other Cardano Guides',
        slug: '/cardano-developer-guides/',
        keywords: ['guides'],
      },
      items: [
        'cardano-developer-guides/nft-native-assets',
        //'cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon', // Deprecated - Needs update
        'cardano-developer-guides/cardano-submit-tx-api-tutorial',
        'cardano-developer-guides/create-.img-file',
        'cardano-developer-guides/how-to-delegate-ada'
      ],
    },
    {
      type: 'category',
      label: 'How to Contribute',
      link:{
        type: 'generated-index',
        title: 'Contributing to our Guides',
        slug: '/contribute/',
        keywords: ['contribute'],
      },
      items: [
        'delegate',
        {
          type: 'category',
          label: 'Contribute 🐱‍🚀',
          link:{
            type: 'generated-index',
            title: 'Contribute 🐱‍🚀',
            slug: 'how-to-contribute',
            keywords: ['contribute'],
          },
          items:[
            'how-to-contribute/contributing-guide',
            'how-to-contribute/style-guide',
            'how-to-contribute/code-of-conduct'
          ]
        }
      ],
    }
  ]
   
};
