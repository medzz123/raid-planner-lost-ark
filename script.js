const axios = require('axios').default;

const MENTIONS = {
  SOUL_CITIZEN: '942109421503385710',
};

const CHANNELS = {
  CHANNEL_HARD_MODE: '976165160983089172',
  CHANNEL_NORMAL_MODE: '975424003890118726',
  CHANNEL_ARGOS_PHASE_3: '942111084620435538',
  CHANNEL_ARGOOS_PHASE_2: '971389978900856922',
  CHANNEL_TESTING_SHIT: '980772636407767080',
};

// Date Example 2022-05-28
// Time Example 19:15

const createRaid = async (options) => {
  const { date, time, title, mentions = [], channel } = options;

  try {
    const response = await axios('https://raid-helper.dev/api/create/', {
      method: 'POST',
      headers: {
        Authorization: 'q2vULs8KpLYhPCJdEhTr',
      },
      data: {
        accessToken:
          'U2FsdGVkX18oM19IaWWCxncJaIxTsVPOpINDkxwqTdD7vxgqiPCjLe7rNRyAhY3V',
        serverid: '942107104897015858',
        channelid: channel,
        leaderid: '232441341647257601',
        title: title,
        description: '',
        date: date,
        time: time,
        settings: '0',
        template: 27,
        schedule: '',
        color: '#D1D339',
        image: '',
        mentions: mentions.length === 0 ? 'none' : mentions.join(','),
        allowed_roles: '',
        opt_out: '',
        announcement: '',
        temp_role: '',
        recurring: '',
        softres: [],
        response: '',
        duration: 0,
        deadline: '0',
        limit: '8',
        lock_at_limit: true,
        limit_per_user: 1,
        horizontal_mode: false,
        bench_overflow: true,
        queue_bench: false,
        vacuum: false,
        force_reminders: false,
        create_thread: false,
        create_discordevent: true,
        pin_message: false,
        deletion: false,
        mention_mode: false,
        preserve_order: 'normal',
        apply_unregister: true,
        apply_specreset: true,
        spec_saving: true,
        font_style: '3',
        alt_names: false,
        attendance: 'true',
        show_header: false,
        show_title: true,
        show_info: true,
        show_roles: true,
        show_content: true,
        show_classes: true,
        show_emotes: true,
        show_numbering: true,
        show_allowed: true,
        show_footer: false,
        date_variant: 'local',
        show_countdown: '',
        defaults_pre_req: true,
        disable_archiving: false,
        allow_duplicate: false,
        bold_all: true,
        rolelimits: '6:DPS;2:Support;',
        classlimits: '',
      },
    });

    console.log(`Raid: ${title}`, response.data.status);
  } catch (error) {
    console.log('Sometihg went wrong', `RAID: ${title}`, error);
  }
};



const runScript = async () => {
/**
 * Argos P3
 * 
 */
await createRaid({
  date: '2022-06-02',
  time: '18:00',
  title: 'ARGOS P3 THURSDAY 1',
  channel: CHANNELS.CHANNEL_ARGOS_PHASE_3,
  mentions: [MENTIONS.SOUL_CITIZEN]
});

await createRaid({
  date: '2022-06-02',
  time: '18:30',
  title: 'ARGOS P3 THURSDAY 2',
  channel: CHANNELS.CHANNEL_ARGOS_PHASE_3,
  mentions: [MENTIONS.SOUL_CITIZEN]
});

await createRaid({
  date: '2022-06-03',
  time: '19:00',
  title: 'ARGOS P3 FRIDAY 1',
  channel: CHANNELS.CHANNEL_ARGOS_PHASE_3,
  mentions: [MENTIONS.SOUL_CITIZEN]
});


/**
 * Argos P2
 * 
 */
await createRaid({
  date: '2022-06-04',
  time: '20:00',
  title: 'ARGOS P2 SATURDAY 1',
  channel: CHANNELS.CHANNEL_ARGOOS_PHASE_2,
  mentions: [MENTIONS.SOUL_CITIZEN]
});

/**
 * Valtan Hard Mode
 * 
 */
await createRaid({
  date: '2022-06-02',
  time: '19:00',
  title: 'THU HARD MODE 1',
  channel: CHANNELS.CHANNEL_HARD_MODE,
  mentions: [MENTIONS.SOUL_CITIZEN]
});

await createRaid({
  date: '2022-06-02',
  time: '21:00',
  title: 'THU HARD MODE 2',
  channel: CHANNELS.CHANNEL_HARD_MODE,
  mentions: [MENTIONS.SOUL_CITIZEN]
});



/**
 * Valtan Normal Mode
 * 
 */
await createRaid({
  date: '2022-06-02',
  time: '20:00',
  title: 'THU NORMAL MODE 1',
  channel: CHANNELS.CHANNEL_NORMAL_MODE,
  mentions: [MENTIONS.SOUL_CITIZEN]
});

await createRaid({
  date: '2022-06-02',
  time: '21:00',
  title: 'THU NORMAL MODE 2',
  channel: CHANNELS.CHANNEL_NORMAL_MODE,
  mentions: [MENTIONS.SOUL_CITIZEN]
});

}




