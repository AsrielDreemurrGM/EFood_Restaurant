import { TagContainer } from './styles';

export type Props = {
  text: string;
};

export const Tag = ({ text }: Props) => <TagContainer>{text}</TagContainer>;

export default Tag;
