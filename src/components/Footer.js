import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";

export default function FooterSocial() {
  return (
    
      <div className="Content-content" >
        <div className="Footer-footer">
          <div>
            <a href="https://www.facebook.com/">
              <ActionIcon size="lg">
                <IconBrandFacebook size="2.05rem" stroke={1.5} />
              </ActionIcon>
            </a>
            <a href="https://www.twitter.com/">
              <ActionIcon size="lg">
                <IconBrandTwitter size="2.05rem" stroke={1.5} />
              </ActionIcon>
            </a>
            <a href="https://www.youtube.com/">
              <ActionIcon size="lg">
                <IconBrandYoutube size="2.05rem" stroke={1.5} />
              </ActionIcon>
            </a>
            <a href="https://www.instagram.com/">
              <ActionIcon size="lg">
                <IconBrandInstagram size="2.05rem" stroke={1.5} />
              </ActionIcon>
            </a>
          </div>
        </div>
      </div>
    
  );
}

// import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core';
// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';

// const useStyles = createStyles((theme) => ({
//   footer: {
//     marginTop: 0,
//     borderTop: `${rem(1)} solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
//     }`,
//   },

//   inner: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: theme.spacing.xl,
//     paddingBottom: theme.spacing.xl,

//     [theme.fn.smallerThan('xs')]: {
//       flexDirection: 'column',
//     },
//   },

//   links: {
//     [theme.fn.smallerThan('xs')]: {
//       marginTop: theme.spacing.md,
//     },
//   },
// }));

// export default function FooterSocial() {
//   const { classes } = useStyles();

//   return (
//     <div className={classes.footer}>
//       <Container className={classes.inner}>
//         <Group spacing={0} className={classes.links} position="right" noWrap>
//           <a href="https://www.facebook.com/"><ActionIcon size="lg"><IconBrandFacebook size="1.05rem" stroke={1.5} /></ActionIcon></a>
//           <a href="https://www.twitter.com/"><ActionIcon size="lg"><IconBrandTwitter size="1.05rem" stroke={1.5} /></ActionIcon></a>
//           <a href="https://www.youtube.com/"><ActionIcon size="lg"><IconBrandYoutube size="1.05rem" stroke={1.5} /></ActionIcon></a>
//           <a href="https://www.instagram.com/"><ActionIcon size="lg"><IconBrandInstagram size="1.05rem" stroke={1.5} /></ActionIcon></a>
//         </Group>
//       </Container>
//     </div>
//   );
// }
