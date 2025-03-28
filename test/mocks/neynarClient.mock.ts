// Mock Neynar client for unit tests
export const mockNeynarClient = {
  // Cast methods
  lookupCastByHashOrWarpcastUrl: jest.fn().mockImplementation(({ identifier, type }) => {
    if (identifier === '0xfe512114e8a7c6b23c51c66c318f8a9a548cfb07' || identifier === 'https://warpcast.com/rish/fe512114') {
      return {
        cast: {
          hash: '0xfe512114e8a7c6b23c51c66c318f8a9a548cfb07',
          author: {
            fid: 194,
            username: 'rish',
            display_name: 'rish'
          },
          text: 'adding more v2 frame related tooling',
          timestamp: '2025-02-12T16:00:21.000Z',
          reactions: {
            likes_count: 67,
            recasts_count: 12
          },
          replies: {
            count: 10
          }
        }
      };
    }
    throw new Error('Cast not found');
  }),

  lookupCastConversation: jest.fn().mockImplementation(({ identifier, type, limit }) => {
    if (identifier === '0xfe512114e8a7c6b23c51c66c318f8a9a548cfb07') {
      return {
        result: {
          casts: [
            {
              hash: '0xfe512114e8a7c6b23c51c66c318f8a9a548cfb07',
              author: {
                fid: 194,
                username: 'rish',
                display_name: 'rish'
              },
              text: 'adding more v2 frame related tooling',
              timestamp: '2025-02-12T16:00:21.000Z',
              reactions: {
                likes_count: 67,
                recasts_count: 12
              },
              replies: {
                count: 10
              }
            },
            {
              hash: '0xreply1',
              author: {
                fid: 195,
                username: 'user1',
                display_name: 'User 1'
              },
              text: 'This is a reply to the original cast',
              timestamp: '2025-02-12T16:30:00.000Z',
              reactions: {
                likes_count: 5,
                recasts_count: 1
              },
              replies: {
                count: 0
              }
            },
            {
              hash: '0xreply2',
              author: {
                fid: 196,
                username: 'user2',
                display_name: 'User 2'
              },
              text: 'Another reply to the original cast',
              timestamp: '2025-02-12T17:00:00.000Z',
              reactions: {
                likes_count: 3,
                recasts_count: 0
              },
              replies: {
                count: 0
              }
            }
          ]
        }
      };
    }
    throw new Error('Cast not found');
  }),

  searchCasts: jest.fn().mockImplementation(({ q, limit }) => {
    if (q === 'neynar') {
      return {
        result: {
          casts: [
            {
              hash: '0xsearch1',
              author: {
                fid: 194,
                username: 'rish',
                display_name: 'rish'
              },
              text: 'Excited about the new Neynar API features!',
              timestamp: '2025-02-12T15:00:00.000Z',
              reactions: {
                likes_count: 45,
                recasts_count: 8
              },
              replies: {
                count: 5
              }
            }
          ]
        }
      };
    } else if (q === 'nonexistent') {
      return {
        result: {
          casts: []
        }
      };
    }
    return {
      result: {
        casts: []
      }
    };
  }),

  fetchCastsForUser: jest.fn().mockImplementation(({ fid, limit }) => {
    if (fid === 194) {
      return {
        result: {
          casts: [
            {
              hash: '0xfe512114e8a7c6b23c51c66c318f8a9a548cfb07',
              author: {
                fid: 194,
                username: 'rish',
                display_name: 'rish'
              },
              text: 'adding more v2 frame related tooling',
              timestamp: '2025-02-12T16:00:21.000Z',
              reactions: {
                likes_count: 67,
                recasts_count: 12
              },
              replies: {
                count: 10
              }
            },
            {
              hash: '0x123456789abcdef',
              author: {
                fid: 194,
                username: 'rish',
                display_name: 'rish'
              },
              text: 'Working on some exciting new features!',
              timestamp: '2025-02-11T12:00:00.000Z',
              reactions: {
                likes_count: 35,
                recasts_count: 8
              },
              replies: {
                count: 5
              }
            }
          ]
        }
      };
    }
    return {
      result: {
        casts: []
      }
    };
  }),

  // User methods
  lookupUserByUsername: jest.fn().mockImplementation((username) => {
    if (username === 'rish') {
      return {
        user: {
          fid: 194,
          username: 'rish',
          display_name: 'rish',
          profile: {
            bio: {
              text: 'building farcaster infra @ /neynar 🪐 casting @ /rish'
            }
          },
          follower_count: 264665,
          following_count: 839,
          verifications: ['0x5a927ac639636e534b678e81768ca19e2c6280b7']
        }
      };
    }
    throw new Error('User not found');
  }),

  lookupUserByFid: jest.fn().mockImplementation((fid) => {
    if (fid === 194) {
      return {
        user: {
          fid: 194,
          username: 'rish',
          display_name: 'rish',
          profile: {
            bio: {
              text: 'building farcaster infra @ /neynar 🪐 casting @ /rish'
            }
          },
          follower_count: 264665,
          following_count: 839,
          verifications: ['0x5a927ac639636e534b678e81768ca19e2c6280b7']
        }
      };
    }
    throw new Error('User not found');
  }),

  searchUser: jest.fn().mockImplementation(({ q, limit }) => {
    if (q === 'rish') {
      return {
        result: {
          users: [
            {
              fid: 194,
              username: 'rish',
              display_name: 'rish',
              profile: {
                bio: {
                  text: 'building farcaster infra @ /neynar 🪐 casting @ /rish'
                }
              },
              follower_count: 264665,
              following_count: 839,
              verifications: ['0x5a927ac639636e534b678e81768ca19e2c6280b7']
            }
          ]
        }
      };
    }
    return {
      result: {
        users: []
      }
    };
  }),

  fetchBulkUsers: jest.fn().mockImplementation(({ fids }) => {
    if (fids.includes(194)) {
      return {
        users: [
          {
            fid: 194,
            username: 'rish',
            display_name: 'rish',
            profile: {
              bio: {
                text: 'building farcaster infra @ /neynar 🪐 casting @ /rish'
              }
            },
            follower_count: 264665,
            following_count: 839,
            verifications: ['0x5a927ac639636e534b678e81768ca19e2c6280b7']
          }
        ]
      };
    } else if (fids.includes(1)) {
      return {
        users: [
          {
            fid: 1,
            username: 'v',
            display_name: 'Varun',
            profile: {
              bio: {
                text: 'Co-founder @farcaster'
              }
            },
            follower_count: 100000,
            following_count: 500,
            verifications: ['0x123456789abcdef']
          }
        ]
      };
    }
    return { users: [] };
  }),

  fetchBulkUsersByEthOrSolAddress: jest.fn().mockImplementation(({ addresses }) => {
    const address = addresses[0].toLowerCase();
    if (address === '0x29db3d715bffd0b50862de8635186c5ac02c0831') {
      return {
        '0x29db3d715bffd0b50862de8635186c5ac02c0831': [
          {
            fid: 194,
            username: 'rish',
            display_name: 'rish',
            profile: {
              bio: {
                text: 'building farcaster infra @ /neynar 🪐 casting @ /rish'
              }
            },
            follower_count: 264665,
            following_count: 839,
            verifications: ['0x5a927ac639636e534b678e81768ca19e2c6280b7'],
            verified_addresses: {
              eth_addresses: ['0x29db3d715bffd0b50862de8635186c5ac02c0831'],
              sol_addresses: []
            }
          }
        ]
      };
    }
    return {};
  }),

  // Feed methods
  fetchFeed: jest.fn().mockImplementation(({ feedType, filterType, limit }) => {
    return {
      casts: [
        {
          hash: '0xtrending1',
          author: {
            fid: 1001,
            username: 'trending_user1',
            display_name: 'Trending User 1'
          },
          text: '#web3 is the future of the internet! #crypto',
          timestamp: '2025-02-12T18:00:00.000Z',
          reactions: {
            likes_count: 120,
            recasts_count: 45
          },
          replies: {
            count: 22
          }
        },
        {
          hash: '0xtrending2',
          author: {
            fid: 1002,
            username: 'trending_user2',
            display_name: 'Trending User 2'
          },
          text: 'Excited about the new #frames feature in #farcaster!',
          timestamp: '2025-02-12T17:30:00.000Z',
          reactions: {
            likes_count: 95,
            recasts_count: 30
          },
          replies: {
            count: 15
          }
        }
      ]
    };
  }),

  // Other methods
  fetchUserCasts: jest.fn().mockImplementation((fid, options) => {
    if (fid === 194) {
      return [
        {
          hash: '0xfe512114e8a7c6b23c51c66c318f8a9a548cfb07',
          author: {
            fid: 194,
            username: 'rish',
            display_name: 'rish'
          },
          text: 'adding more v2 frame related tooling',
          timestamp: '2025-02-12T16:00:21.000Z',
          reactions: {
            likes_count: 67,
            recasts_count: 12
          },
          replies: {
            count: 10
          }
        },
        {
          hash: '0x123456789abcdef',
          author: {
            fid: 194,
            username: 'rish',
            display_name: 'rish'
          },
          text: 'Working on some exciting new features!',
          timestamp: '2025-02-11T12:00:00.000Z',
          reactions: {
            likes_count: 35,
            recasts_count: 8
          },
          replies: {
            count: 5
          }
        }
      ];
    }
    return [];
  }),

  searchChannels: jest.fn().mockImplementation(({ q, limit = 20, cursor }) => {
    if (q === 'beyond-ai') {
      return Promise.resolve({
        channels: [{
          id: 'beyond-ai',
          name: 'Beyond AI',
          description: 'AI Inference Network for Onchain Agents and Gaming',
          follower_count: 11,
          parent_url: 'https://warpcast.com/~/channel/beyond-ai',
          image_url: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6bff7396-073f-48e9-2bc9-07573ea27000/original',
          lead_fid: undefined,
          created_at: 1741783577,
          updated_at: '2025-03-21T17:05:23.018Z'
        }],
        next: { cursor: null }
      });
    } else if (q === 'test') {
      return Promise.resolve({
        channels: [{
          id: '1',
          name: 'Test Channel',
          description: 'Test channel description',
          follower_count: 100,
          parent_url: 'https://warpcast.com/~/channel/test',
          image_url: 'https://example.com/image.jpg',
          lead_fid: undefined,
          created_at: 1741783577,
          updated_at: '2024-03-21T00:00:00Z'
        }],
        next: { cursor: null }
      });
    } else if (q === 'nonexistent') {
      return Promise.resolve({
        channels: [],
        next: { cursor: null }
      });
    }
    return Promise.resolve({
      channels: [],
      next: { cursor: null }
    });
  }),

  searchBulkChannels: jest.fn().mockImplementation((queries) => {
    const results: any = {};
    
    queries.forEach((query: string) => {
      if (query === 'beyond-ai') {
        results[query] = {
          channels: [{
            id: 'beyond-ai',
            name: 'Beyond AI',
            description: 'AI Inference Network for Onchain Agents and Gaming',
            follower_count: 11,
            parent_url: 'https://warpcast.com/~/channel/beyond-ai',
            image_url: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6bff7396-073f-48e9-2bc9-07573ea27000/original',
            lead_fid: undefined,
            created_at: 1741783577,
            updated_at: '2025-03-21T17:05:23.018Z',
            focus_areas: ['AI', 'Gaming', 'Onchain Agents'],
            significance: 'Well-maintained channel with regular updates'
          }],
          next: { cursor: null }
        };
      } else if (query === 'neynar') {
        results[query] = {
          channels: [{
            id: 'neynar',
            name: 'Neynar',
            description: 'Official channel for Neynar - Building the social layer for web3',
            follower_count: 25000,
            parent_url: 'https://warpcast.com/~/channel/neynar',
            image_url: 'https://example.com/neynar.jpg',
            lead_fid: undefined,
            created_at: 1693526400,
            updated_at: '2024-03-21T00:00:00Z',
            focus_areas: ['Web3', 'Social Infrastructure', 'Platform Updates'],
            significance: 'Major community hub with significant following'
          }],
          next: { cursor: null }
        };
      } else if (query === 'test') {
        results[query] = {
          channels: [{
            id: '1',
            name: 'Test Channel',
            description: 'Test channel description',
            follower_count: 100,
            parent_url: 'https://warpcast.com/~/channel/test',
            image_url: 'https://example.com/image.jpg',
            lead_fid: undefined,
            created_at: 1741783577,
            updated_at: '2024-03-21T00:00:00Z',
            focus_areas: ['Testing'],
            significance: 'Emerging channel in development'
          }],
          next: { cursor: null }
        };
      } else if (query === 'nonexistent') {
        results[query] = {
          channels: [],
          next: { cursor: null }
        };
      } else {
        results[query] = {
          channels: [],
          next: { cursor: null }
        };
      }
    });

    return Promise.resolve(results);
  })
};

export default mockNeynarClient; 
