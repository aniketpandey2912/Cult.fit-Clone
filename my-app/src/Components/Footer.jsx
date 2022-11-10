import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

function Footer() {
  return (
    <VStack border="2px solid green" h="auto" spacing="0">
      {/* Part - 1 */}

      <Box bg="black" h="50%" w="100%" py="20px">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="0.5%"
          align="left"
          h="100%"
        >
          {/* left box */}
          <Box bg="none" h="100%" px="10%" py="15%">
            <Image
              h="40px"
              mb="40px"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              // src="/logo.png"
              alt="logo"
            />

            <Text fontWeight="bold" color="white">
              At cult.fit, we make group workouts fun, daily food healthy &
              tasty, mental fitness easy with yoga & meditation, Medical &
              lifestyle care hassle-free.#BeBetterEveryDay
            </Text>
          </Box>

          {/* middle box */}
          <Box bg="none" fontWeight="bold" color="white">
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap="3%"
              h="auto"
              py="11%"
              // px="0%"
            >
              <GridItem w="100%" bg="none">
                {gridItem1.map((el) => (
                  <Box mb="18px">
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
              <GridItem w="100%" bg="none">
                {gridItem2.map((el) => (
                  <Box mb="32px">
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
              <GridItem w="100%" bg="none">
                {gridItem3.map((el) => (
                  <Box mb="32px">
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
            </Grid>
          </Box>

          {/* right box */}
          <Box bg="black" py="30px">
            {/* App store */}
            <NavLink to="https://apps.apple.com/us/app/cure-fit/id1217794588">
              <Center mb="30px">
                <Image
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
                  h="60px"
                  w="40%"
                />
              </Center>
            </NavLink>

            {/* Google Play */}
            <NavLink to="https://play.google.com/store/apps/details?id=fit.cure.android">
              <Center>
                <Image
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
                  h="60px"
                  w="40%"
                />
              </Center>
            </NavLink>

            {/* Social media icons */}
            <Center py="65px">
              {/* logic for icons */}
              {socialmediaIcons.map((el) => (
                <NavLink
                  to={el.to}
                  style={({ isActive }) =>
                    isActive
                      ? socialmediaIconsStyles.activeStyle
                      : socialmediaIconsStyles.inactiveStyle
                  }
                >
                  <Icon
                    as={el.icon}
                    boxSize="100%"
                    bg="grey"
                    borderRadius="50%"
                    p="1px"
                  />
                </NavLink>
              ))}
            </Center>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Part-2 */}
      <Box bg="#333" h="auto" w="100%" py="40px" color="white">
        <Text textAlign="center" mb="15px">Related Search</Text>
        <Grid templateColumns="repeat(6, 1fr)" gap="3%" h="auto">
          <GridItem w="100%" bg="none">
            {rlatedSearch1.map((el) => (
              <Box mb="3px">
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch2.map((el) => (
              <Box mb="3px">
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch3.map((el) => (
              <Box mb="3px">
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch4.map((el) => (
              <Box mb="3px">
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch5.map((el) => (
              <Box mb="3px">
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch6.map((el) => (
              <Box mb="3px">
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
}

export default Footer;

// footer part 1
// Middle Box
const gridItem1 = [
  { title: "cult.fit for business", to: "https://business.cult.fit/" },
  { title: "cult.fit franchise", to: "https://business.cult.fit/" },
  { title: "corporate partnerships", to: "https://business.cult.fit/" },
  { title: "cult pass network", to: "https://business.cult.fit/" },
  { title: "t&c for business", to: "https://business.cult.fit/" },
];
const gridItem2 = [
  { title: "partner.fit", to: "https://business.cult.fit/" },
  { title: "blogs", to: "https://business.cult.fit/" },
  { title: "security", to: "https://business.cult.fit/" },
  { title: "careers", to: "https://business.cult.fit/" },
];
const gridItem3 = [
  { title: "contact us", to: "https://business.cult.fit/" },
  { title: "privacy policy", to: "https://business.cult.fit/" },
  { title: "cult bmi calculator", to: "https://business.cult.fit/" },
  { title: "terms & conditions", to: "https://business.cult.fit/" },
];

// Left box
const socialmediaIcons = [
  {
    icon: BsFacebook,
    alt: "facebook",
    to: "https://www.youtube.com/channel/UCSE72IaHOL-1Tv-m3JHE4Cg",
  },
  {
    icon: BsYoutube,
    alt: "youtube",
    to: "https://www.facebook.com/cultfitofficial",
  },
  {
    icon: BsTwitter,
    alt: "twitter",
    to: "https://twitter.com/cultfitOfficial",
  },
  {
    icon: BsInstagram,
    alt: "instgram",
    to: "https://www.instagram.com/cultfitOfficial/",
  },
  {
    icon: BsLinkedin,
    alt: "linkedin",
    to: "https://www.linkedin.com/company/cult.fit/",
  },
];

// social mediaicon styling
const socialmediaIconsStyles = {
  activeStyle: {
    height: "35px",
    margin: "0 3%",
  },
  inactiveStyle: {
    height: "35px",
    margin: "0 3%",
  },
};

// Part-2
const rlatedSearch1 = [
  { title: "Gym Near Me", to: "https://www.cult.fit/fitness/cultpass-elite" },
  {
    title: "Yoga Postures for Beginners",
    to: "https://www.cult.fit/live/fitness/yoga-for-beginners/FIT_SERIES_34/s",
  },
  {
    title: "Bedtime Stories for Kids",
    to: "https://www.cult.fit/live/mindfulness/sleep-stories-for-kids/sleep-stories-by-dr-shyam-bhat-1/MEDPACK088/p",
  },
  {
    title: "Gyms in Pune",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-pune",
  },
  {
    title: "Gyms in Chandigarh",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-chandigarh",
  },
  {
    title: "Strength Training",
    to: "https://www.cult.fit/lp/live/fitness/strength-training",
  },
  {
    title: "Core Exercises",
    to: "https://www.cult.fit/lp/live/fitness/core-exercises",
  },
  {
    title: "Fitness Glossary",
    to: "https://blog.cult.fit/articles/fitness-glossary",
  },
];
const rlatedSearch2 = [
  {
    title: "Face Yoga",
    to: "https://www.cult.fit/live/fitness/5-minute-workouts/face-yoga/FITIN5_4/p",
  },
  {
    title: "Surya Namaskar for Beginners",
    to: "https://www.cult.fit/live/fitness/surya-namaskar/surya-namaskar-poses/DIYPACK054/p",
  },
  {
    title: "Meditation in Hindi",
    to: "https://www.cult.fit/live/mindfulness/guided-meditation-in-hindi/meditation-pack-in-hindi/MEDPACK076/p",
  },
  {
    title: "Gyms in Hyderabad",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-hyderabad",
  },
  {
    title: "Gyms in Indore",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-indore",
  },
  {
    title: "Mobility Exercises",
    to: "https://www.cult.fit/lp/live/fitness/mobility-exercises",
  },
  {
    title: "Butt Exercises",
    to: "https://www.cult.fit/lp/live/fitness/butt-exercises",
  },
  {
    title: "Morning Exercise",
    to: "https://www.cult.fit/lp/live/fitness/morning-workout",
  },
];
const rlatedSearch3 = [
  { title: "Healthy Recipes", to: "https://www.cult.fit/live/recipe" },
  {
    title: "Yoga For Stress Relief",
    to: "https://www.cult.fit/live/fitness/yoga-for-stress-relief-and-relaxation/stretch-relax-and-release-stress/DIYPACK056/p",
  },
  {
    title: "Mindfulness Meditation",
    to: "https://www.cult.fit/live/mindfulness/mindfulness-in-daily-life/mindful-to-be-truly-alive/MEDPACK099/p",
  },
  {
    title: "Gyms in Chennai",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-chennai",
  },
  {
    title: "Gyms in Coimbatore",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-coimbatore",
  },
  {
    title: "Kids Exercise",
    to: "https://www.cult.fit/lp/live/fitness/kids-exercise",
  },
  {
    title: "Arm Workout at Home",
    to: "https://www.cult.fit/lp/live/fitness/arm-workout",
  },
  { title: "Home Workouts", to: "https://www.cult.fit/fitness/cultpass-live" },
];
const rlatedSearch4 = [
  {
    title: "Chest Exercises",
    to: "https://www.cult.fit/lp/live/fitness/chest-workout",
  },
  {
    title: "Yoga Asanas",
    to: "https://www.cult.fit/live/mindfulness/yoga-asanas/MED_SERIES_21/s",
  },
  {
    title: "Yoga Nidra",
    to: "https://www.cult.fit/lp/live/mindfulness/yoga-nidra",
  },
  {
    title: "Gyms in Jaipur",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-jaipur",
  },
  {
    title: "Gyms in Bangalore",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-bangalore",
  },
  {
    title: "How to Lose Weight",
    to: "https://www.cult.fit/lp/live/fitness/how-to-lose-weight",
  },
  {
    title: "Back Exercises at Home",
    to: "https://www.cult.fit/lp/live/fitness/back-exercises",
  },
];
const rlatedSearch5 = [
  {
    title: "Exercise To Reduce Belly Fat",
    to: "https://www.cult.fit/live/fitness/exercise-to-reduce-belly-fat/FIT_SERIES_1/s",
  },
  {
    title: "Meditation Music",
    to: "https://www.cult.fit/live/mindfulness/music-for-meditation/MED_SERIES_14/s",
  },
  {
    title: "Gyms in Mumbai",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-mumbai",
  },
  {
    title: "Gyms in Kolkata",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-kolkata",
  },
  {
    title: "Belly Fat Loss Exercise",
    to: "https://www.cult.fit/live/fitness/exercise-to-reduce-belly-fat/FIT_SERIES_1/s",
  },
  {
    title: "HIIT Workout",
    to: "https://www.cult.fit/lp/live/fitness/hiit-workout",
  },
  {
    title: "Abs Workout at Home",
    to: "https://www.cult.fit/lp/live/fitness/abs-workout",
  },
];
const rlatedSearch6 = [
  {
    title: "Six Pack Workout",
    to: "https://www.cult.fit/live/fitness/six-pack-abs/get-ripped-6-pack-abs/DIYPACK066/p",
  },
  {
    title: "Pranayama",
    to: "https://www.cult.fit/live/mindfulness/yoga-pranayama/MED_SERIES_11/s",
  },
  {
    title: "Gyms in Delhi",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-delhi",
  },
  {
    title: "Gyms in Ahmedabad",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-ahmedabad",
  },
  {
    title: "Weight Loss Exercise",
    to: "https://www.cult.fit/live/fitness/weight-loss-exercises/FIT_SERIES_9/s",
  },
  {
    title: "Exercises for Toned Body",
    to: "https://www.cult.fit/lp/live/fitness/how-to-get-a-toned-body",
  },
  {
    title: "Thigh Exercises",
    to: "https://www.cult.fit/lp/live/fitness/thigh-exercise",
  },
];
