import { Button, Card, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { SIDEBAR_FREQUENTLY_ASKED_QUESTIONS } from '../../config/sidebar.config'

const CONTACT_OPTIONS = [
  {
    label: 'LinkedIn',
    description:
      'Connect with us on LinkedIn to stay updated with our latest news and projects. We’d love to hear from you!',
    href: 'https://www.linkedin.com/in/hubert-pokrywka-89a784263/',
    icon: FaLinkedin,
  },

  {
    label: 'GitHub',
    description: 'Check out my GitHub repository for project updates, code samples, and more',
    href: 'https://github.com/pokrywa1',
    icon: FaGithub,
  },
  {
    label: 'Email',
    description: 'For direct inquiries, you can email me. I aim to respond within 24 hours.',
    href: 'mailto:h.pokrywka2001@gmail.com',
    icon: FaGoogle,
  },
]

const ViewContactUs = () => {
  return (
    <ArticleLayout prevPage={SIDEBAR_FREQUENTLY_ASKED_QUESTIONS}>
      <Title>Contact Us</Title>
      <Text>
        If you have any questions or need further assistance, feel free to reach out to us through
        the following channels:
      </Text>

      <SimpleGrid cols={2} spacing="lg">
        {CONTACT_OPTIONS.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </SimpleGrid>
    </ArticleLayout>
  )
}
export default ViewContactUs

type ContactCardProps = {
  label: string
  description: string
  href: string
  icon: IconType
}

const ContactCard = ({ label, description, href, icon: Icon }: ContactCardProps) => {
  return (
    <Card withBorder radius={'md'} p={'xl'} shadow="md">
      <Stack h={'100%'}>
        <ThemeIcon variant="light" size={60}>
          <Icon size={30} />
        </ThemeIcon>
        <Text fw={600}>{label}</Text>
        <Text>{description}</Text>
        <Link
          to={href}
          target="_blank"
          style={{
            display: 'block',
            marginTop: 'auto',
          }}
        >
          <Button fullWidth mt={'auto'}>
            Check
          </Button>
        </Link>
      </Stack>
    </Card>
  )
}
