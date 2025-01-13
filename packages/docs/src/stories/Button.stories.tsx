import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@enosd-ui/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'small',
    onClick: action('button-click'),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<typeof Button>;

const Template: StoryObj<ButtonProps> = {
  render: (args) => <Button {...args} />, 
};

export const Primary = {
  ...Template,
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  ...Template,
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Tertiary = {
  ...Template,
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
  },
};