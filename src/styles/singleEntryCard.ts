import { SingleCardStyles } from '../types/singleEntyCardTypes'

export const styles: SingleCardStyles = {
  card: (theme) => ({
    padding: theme.spacing(2),
  }),
  container: (theme) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'flex-start',
  }),
  title: {
    fontWeight: 600,
    fontSize: '1,25rem',
  },
  introduction: (theme) => ({
    color: theme.palette.text.primary,
  }),
  fullContent: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  image: (theme) => ({
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
    flexShrink: 0,
  }),
}
