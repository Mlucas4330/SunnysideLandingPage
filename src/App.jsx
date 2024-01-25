import { Box, Button, ButtonGroup, Flex, Grid, GridItem, Heading, IconButton, Image, Link, Text } from '@chakra-ui/react';
import headerBackgroundImage from './assets/images/desktop/image-header.jpg';
import eggImage from './assets/images/desktop/image-transform.jpg';
import cupImage from './assets/images/desktop/image-stand-out.jpg';
import cherryImage from './assets/images/desktop/image-graphic-design.jpg';
import orangeImage from './assets/images/desktop/image-photography.jpg';
import milkImage from './assets/images/desktop/image-gallery-milkbottles.jpg';
import orangeMilkImage from './assets/images/desktop/image-gallery-orange.jpg';
import iceCreamImage from './assets/images/desktop/image-gallery-cone.jpg';
import sugarImage from './assets/images/desktop/image-gallery-sugarcubes.jpg';
import emilyPicture from './assets/images/image-emily.jpg';
import thomasPicture from './assets/images/image-thomas.jpg';
import jenniePicture from './assets/images/image-jennie.jpg';
import facebookIcon from './assets/images/icon-facebook.svg';
import instagramIcon from './assets/images/icon-instagram.svg';
import twitterIcon from './assets/images/icon-twitter.svg';
import pinterestIcon from './assets/images/icon-pinterest.svg';
function App() {
    return (
        <>
            <Box as="header" backgroundImage={headerBackgroundImage} backgroundSize={'cover'}>
                <nav>
                    <Heading>Sunnyside</Heading>
                    <Flex>
                        <Link>About</Link>
                        <Link>Services</Link>
                        <Link>Projects</Link>
                        <Button>CONTACT</Button>
                    </Flex>
                </nav>
                <Heading>WE ARE CREATIVES</Heading>
            </Box>
            <Flex as="main">
                <Box>
                    <Heading>Transform your brand</Heading>
                    <Text>
                        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for you.
                    </Text>
                    <Link>LEARN MORE</Link>
                </Box>
                <Image src={eggImage} />
            </Flex>
            <Flex>
                <Image src={cupImage} />
                <Box>
                    <Heading>Stand out to the right audience</Heading>
                    <Text>
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build
                        and extend your brand in digital places.
                    </Text>
                    <Link>LEARN MORE</Link>
                </Box>
            </Flex>
            <Flex>
                <Box backgroundImage={cherryImage}>
                    <Heading>Graphic Design</Heading>
                    <Text>
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential
                        clients attention.
                    </Text>
                </Box>
                <Box backgroundImage={orangeImage}>
                    <Heading>Photography</Heading>
                    <Text>
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </Text>
                </Box>
            </Flex>
            <Box>
                <Heading>CLIENT TESTIMONIALS</Heading>
                <Grid>
                    <GridItem>
                        <Image src={emilyPicture} />
                        <Text>
                            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                        </Text>
                        <Text>Emily R.</Text>
                        <Text>Marketing Director</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={thomasPicture} />
                        <Text>
                            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and
                            enjoyable experience.
                        </Text>
                        <Text>Thomas S.</Text>
                        <Text>Chief Operating Officer</Text>
                    </GridItem>
                    <GridItem>
                        <Image src={jenniePicture} />
                        <Text>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</Text>
                        <Text>Jennie F.</Text>
                        <Text>Business Owner</Text>
                    </GridItem>
                </Grid>
            </Box>
            <Grid templateColumns={'repeat(4, 1fr)'}>
                <Image src={milkImage} />
                <Image src={orangeMilkImage} />
                <Image src={iceCreamImage} />
                <Image src={sugarImage} />
            </Grid>
            <Box as={'footer'} backgroundColor={}>
                <Heading>sunnyside</Heading>
                <Flex>
                    <Link>About</Link>
                    <Link>Services</Link>
                    <Link>Projects</Link>
                </Flex>
                <ButtonGroup>
                    <IconButton icon={facebookIcon} />
                    <IconButton icon={instagramIcon} />
                    <IconButton icon={twitterIcon} />
                    <IconButton icon={pinterestIcon} />
                </ButtonGroup>
            </Box>
        </>
    );
}

export default App;
