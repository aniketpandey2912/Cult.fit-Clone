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
    <VStack border="0px solid white" h="auto" spacing="0">
      {/* Part - 1 */}

      <Box bg="black" h="50%" w="100%" py="20px">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="0.5%" h="100%">
          {/* left box */}
          <Box
            bg="none"
            h="100%"
            px="10%"
            py="15%"
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Image
              h="40px"
              mb="40px"
              mx={{ base: "auto", md: "0" }}
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
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              textAlign={{ base: "center", md: "left" }}
              gap={{ base: "3%", md: "3%" }}
              h="auto"
              py="11%"
            >
              <GridItem w="100%" bg="none">
                {gridItem1.map((el) => (
                  <Box mb="18px" key={el.id}>
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
              <GridItem w="100%" bg="none">
                {gridItem2.map((el) => (
                  <Box mb="32px" key={el.id}>
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
              <GridItem w="100%" bg="none">
                {gridItem3.map((el) => (
                  <Box mb="32px" key={el.id}>
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
            </Grid>
          </Box>

          {/* right box */}
          <Box bg="none" py="30px">
            {/* App store */}
            <NavLink to="https://apps.apple.com/us/app/cure-fit/id1217794588">
              <Center mb="30px">
                <Image
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
                  h="60px"
                  w={{ base: "30%", md: "40%" }}
                />
              </Center>
            </NavLink>

            {/* Google Play */}
            <NavLink to="https://play.google.com/store/apps/details?id=fit.cure.android">
              <Center>
                <Image
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
                  h="60px"
                  w={{ base: "30%", md: "40%" }}
                />
              </Center>
            </NavLink>

            {/* Social media icons */}
            <Center py="65px">
              {/* logic for icons */}
              {socialmediaIcons.map((el) => (
                <NavLink
                  key={el.id}
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
        <Text textAlign="center" textDecoration="underline" mb="15px">
          Related Search
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap="3%"
          h="auto"
        >
          <GridItem w="100%" bg="none">
            {rlatedSearch1.map((el) => (
              <Box
                mb="3px"
                textAlign={{ base: "center", md: "left" }}
                key={el.id}
              >
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch2.map((el) => (
              <Box
                mb="3px"
                textAlign={{ base: "center", md: "left" }}
                key={el.id}
              >
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch3.map((el) => (
              <Box
                mb="3px"
                textAlign={{ base: "center", md: "left" }}
                key={el.id}
              >
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch4.map((el) => (
              <Box
                mb="3px"
                textAlign={{ base: "center", md: "left" }}
                key={el.id}
              >
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch5.map((el) => (
              <Box
                mb="3px"
                textAlign={{ base: "center", md: "left" }}
                key={el.id}
              >
                <NavLink to={el.to} end>
                  {el.title}
                </NavLink>
              </Box>
            ))}
          </GridItem>
          <GridItem w="100%" bg="none">
            {rlatedSearch6.map((el) => (
              <Box
                mb="3px"
                textAlign={{ base: "center", md: "left" }}
                key={el.id}
              >
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
  { id: 1, title: "cult.fit for business", to: "https://business.cult.fit/" },
  { id: 2, title: "cult.fit franchise", to: "https://business.cult.fit/" },
  { id: 3, title: "corporate partnerships", to: "https://business.cult.fit/" },
  { id: 4, title: "cult pass network", to: "https://business.cult.fit/" },
  { id: 5, title: "t&c for business", to: "https://business.cult.fit/" },
];
const gridItem2 = [
  { id: 1, title: "partner.fit", to: "https://business.cult.fit/" },
  { id: 2, title: "blogs", to: "https://business.cult.fit/" },
  { id: 3, title: "security", to: "https://business.cult.fit/" },
  { id: 4, title: "careers", to: "https://business.cult.fit/" },
];
const gridItem3 = [
  { id: 1, title: "contact us", to: "https://business.cult.fit/" },
  { id: 2, title: "privacy policy", to: "https://business.cult.fit/" },
  { id: 3, title: "cult bmi calculator", to: "https://business.cult.fit/" },
  { id: 4, title: "terms & conditions", to: "https://business.cult.fit/" },
];

// Left box
const socialmediaIcons = [
  {
    id: 1,
    icon: BsFacebook,
    alt: "facebook",
    to: "https://www.youtube.com/channel/UCSE72IaHOL-1Tv-m3JHE4Cg",
  },
  {
    id: 2,
    icon: BsYoutube,
    alt: "youtube",
    to: "https://www.facebook.com/cultfitofficial",
  },
  {
    id: 3,
    icon: BsTwitter,
    alt: "twitter",
    to: "https://twitter.com/cultfitOfficial",
  },
  {
    id: 4,
    icon: BsInstagram,
    alt: "instgram",
    to: "https://www.instagram.com/cultfitOfficial/",
  },
  {
    id: 5,
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
  {
    id: 1,
    title: "Gym Near Me",
    to: "https://www.cult.fit/fitness/cultpass-elite",
  },
  {
    id: 2,
    title: "Yoga Postures for Beginners",
    to: "https://www.cult.fit/live/fitness/yoga-for-beginners/FIT_SERIES_34/s",
  },
  {
    id: 3,
    title: "Bedtime Stories for Kids",
    to: "https://www.cult.fit/live/mindfulness/sleep-stories-for-kids/sleep-stories-by-dr-shyam-bhat-1/MEDPACK088/p",
  },
  {
    id: 4,
    title: "Gyms in Pune",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-pune",
  },
  {
    id: 5,
    title: "Gyms in Chandigarh",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-chandigarh",
  },
  {
    id: 6,
    title: "Strength Training",
    to: "https://www.cult.fit/lp/live/fitness/strength-training",
  },
  {
    id: 7,
    title: "Core Exercises",
    to: "https://www.cult.fit/lp/live/fitness/core-exercises",
  },
  {
    id: 8,
    title: "Fitness Glossary",
    to: "https://blog.cult.fit/articles/fitness-glossary",
  },
];
const rlatedSearch2 = [
  {
    id: 1,
    title: "Face Yoga",
    to: "https://www.cult.fit/live/fitness/5-minute-workouts/face-yoga/FITIN5_4/p",
  },
  {
    id: 2,
    title: "Surya Namaskar for Beginners",
    to: "https://www.cult.fit/live/fitness/surya-namaskar/surya-namaskar-poses/DIYPACK054/p",
  },
  {
    id: 3,
    title: "Meditation in Hindi",
    to: "https://www.cult.fit/live/mindfulness/guided-meditation-in-hindi/meditation-pack-in-hindi/MEDPACK076/p",
  },
  {
    id: 4,
    title: "Gyms in Hyderabad",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-hyderabad",
  },
  {
    id: 5,
    title: "Gyms in Indore",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-indore",
  },
  {
    id: 6,
    title: "Mobility Exercises",
    to: "https://www.cult.fit/lp/live/fitness/mobility-exercises",
  },
  {
    id: 7,
    title: "Butt Exercises",
    to: "https://www.cult.fit/lp/live/fitness/butt-exercises",
  },
  {
    id: 8,
    title: "Morning Exercise",
    to: "https://www.cult.fit/lp/live/fitness/morning-workout",
  },
];
const rlatedSearch3 = [
  { id: 1, title: "Healthy Recipes", to: "https://www.cult.fit/live/recipe" },
  {
    id: 2,
    title: "Yoga For Stress Relief",
    to: "https://www.cult.fit/live/fitness/yoga-for-stress-relief-and-relaxation/stretch-relax-and-release-stress/DIYPACK056/p",
  },
  {
    id: 3,
    title: "Mindfulness Meditation",
    to: "https://www.cult.fit/live/mindfulness/mindfulness-in-daily-life/mindful-to-be-truly-alive/MEDPACK099/p",
  },
  {
    id: 4,
    title: "Gyms in Chennai",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-chennai",
  },
  {
    id: 5,
    title: "Gyms in Coimbatore",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-coimbatore",
  },
  {
    id: 6,
    title: "Kids Exercise",
    to: "https://www.cult.fit/lp/live/fitness/kids-exercise",
  },
  {
    id: 7,
    title: "Arm Workout at Home",
    to: "https://www.cult.fit/lp/live/fitness/arm-workout",
  },
  {
    id: 8,
    title: "Home Workouts",
    to: "https://www.cult.fit/fitness/cultpass-live",
  },
];
const rlatedSearch4 = [
  {
    id: 1,
    title: "Chest Exercises",
    to: "https://www.cult.fit/lp/live/fitness/chest-workout",
  },
  {
    id: 2,
    title: "Yoga Asanas",
    to: "https://www.cult.fit/live/mindfulness/yoga-asanas/MED_SERIES_21/s",
  },
  {
    id: 3,
    title: "Yoga Nidra",
    to: "https://www.cult.fit/lp/live/mindfulness/yoga-nidra",
  },
  {
    id: 4,
    title: "Gyms in Jaipur",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-jaipur",
  },
  {
    id: 5,
    title: "Gyms in Bangalore",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-bangalore",
  },
  {
    id: 6,
    title: "How to Lose Weight",
    to: "https://www.cult.fit/lp/live/fitness/how-to-lose-weight",
  },
  {
    id: 7,
    title: "Back Exercises at Home",
    to: "https://www.cult.fit/lp/live/fitness/back-exercises",
  },
];
const rlatedSearch5 = [
  {
    id: 1,
    title: "Exercise To Reduce Belly Fat",
    to: "https://www.cult.fit/live/fitness/exercise-to-reduce-belly-fat/FIT_SERIES_1/s",
  },
  {
    id: 2,
    title: "Meditation Music",
    to: "https://www.cult.fit/live/mindfulness/music-for-meditation/MED_SERIES_14/s",
  },
  {
    id: 3,
    title: "Gyms in Mumbai",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-mumbai",
  },
  {
    id: 4,
    title: "Gyms in Kolkata",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-kolkata",
  },
  {
    id: 5,
    title: "Belly Fat Loss Exercise",
    to: "https://www.cult.fit/live/fitness/exercise-to-reduce-belly-fat/FIT_SERIES_1/s",
  },
  {
    id: 6,
    title: "HIIT Workout",
    to: "https://www.cult.fit/lp/live/fitness/hiit-workout",
  },
  {
    id: 7,
    title: "Abs Workout at Home",
    to: "https://www.cult.fit/lp/live/fitness/abs-workout",
  },
];
const rlatedSearch6 = [
  {
    id: 1,
    title: "Six Pack Workout",
    to: "https://www.cult.fit/live/fitness/six-pack-abs/get-ripped-6-pack-abs/DIYPACK066/p",
  },
  {
    id: 2,
    title: "Pranayama",
    to: "https://www.cult.fit/live/mindfulness/yoga-pranayama/MED_SERIES_11/s",
  },
  {
    id: 3,
    title: "Gyms in Delhi",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-delhi",
  },
  {
    id: 4,
    title: "Gyms in Ahmedabad",
    to: "https://www.cult.fit/lp/cult/center/gyms-in-ahmedabad",
  },
  {
    id: 5,
    title: "Weight Loss Exercise",
    to: "https://www.cult.fit/live/fitness/weight-loss-exercises/FIT_SERIES_9/s",
  },
  {
    id: 6,
    title: "Exercises for Toned Body",
    to: "https://www.cult.fit/lp/live/fitness/how-to-get-a-toned-body",
  },
  {
    id: 7,
    title: "Thigh Exercises",
    to: "https://www.cult.fit/lp/live/fitness/thigh-exercise",
  },
];
