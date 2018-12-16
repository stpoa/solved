import { mount } from 'enzyme'
import React from 'react'

beforeEach(() => jest.resetModules())

// mock context.Consumer to isolate passed value prop
const requireWithAuth = (value: any) => {
  jest.doMock('./context', () => {
    return {
      Consumer(props: any) {
        return props.children(value)
      },
    }
  })

  return require('./withAuth').default
}

describe('withAuth()', () => {
  const value = {
    signIn: jest.fn(),
    signOut: jest.fn(),
  }

  const withAuth = requireWithAuth(value)
  const Component = () => null
  const AuthedComponent = withAuth(Component)
  const wrapper = mount(<AuthedComponent />)

  it('injects auth props to a component', () => {
    const componentProps = wrapper.find(Component).props()

    expect(componentProps).toHaveProperty('auth')
    expect(componentProps).toHaveProperty('auth.signIn')
    expect(componentProps).toHaveProperty('auth.signOut')
  })

  it('calls injected functions from an enhanced component', () => {
    const component = wrapper.find(Component)
    const consumer = wrapper.children()

    expect(consumer).not.toBe(component)

    const componentAuthProps = component.props().auth

    componentAuthProps.signIn('email', 'password')
    wrapper.update()

    expect(value.signIn).toHaveBeenCalledWith('email', 'password')

    componentAuthProps.signOut()
    wrapper.update()

    expect(value.signOut).toHaveBeenCalled()
  })
})
