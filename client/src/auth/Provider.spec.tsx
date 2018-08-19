import { mount } from 'enzyme'
import React, { SFC } from 'react'
import context, { Status } from './context'
import Provider from './Provider'

describe('<Provider />', () => {
  describe('renders correctly', () => {
    it('with no children', () => {
      const wrapper = mount(<Provider />)

      expect(wrapper.children()).toHaveLength(0)
      expect(wrapper.html()).toBeNull()
    })

    it('with a single child', () => {
      const wrapper = mount(
        <Provider>
          <div>rendered</div>
        </Provider>
      )

      expect(wrapper.html()).toBe('<div>rendered</div>')
    })
  })

  describe('provides correct value', () => {
    const Component: SFC<any> = () => null

    const mountProvider = () => mount(
      <Provider>
        <context.Consumer>
          {(value: any) => <Component value={value} />}
        </context.Consumer>
      </Provider>
    )

    const getValue = (wrapper: any, update: boolean = true) => {
      if (update) wrapper.update()

      return wrapper.find(Component).props().value
    }

    const expectInitialValue = (value: any) => {
      expect(Object.keys(value)).toHaveLength(5)
      expect(typeof value.signIn).toBe('function')
      expect(typeof value.signOut).toBe('function')
      expect(value.signedIn).toBe(false)
      expect(value.user).toBeNull()
      expect(value.status).toBeUndefined()
    }

    it('on init', () => {
      const value = getValue(mountProvider(), false)

      expectInitialValue(value)
    })

    const testSignIn = (email: string, password: string, callback: (wrapper: any) => void) => {
      const wrapper = mountProvider()
      let value = getValue(wrapper, false)

      expectInitialValue(value)

      value
        .signIn(email, password)
        .then(() => callback(wrapper))

      value = getValue(wrapper)

      expect(value.signedIn).toBe(false)
      expect(value.user).toBeNull()
      expect(value.status).toBe(Status.Pending)

    }

    it('when signIn() succeeds', (done) => {
      testSignIn('user@notowork.com', '1234', (wrapper) => {
        const value = getValue(wrapper)

        expect(value.signedIn).toBe(true)
        expect(value.user).toBeTruthy()
        expect(value.status).toBe(Status.Success)

        done()
      })
    })

    it('when signIn() fails', (done) => {
      testSignIn('badUser@notowork.com', '1234', (wrapper) => {
        const value = getValue(wrapper)

        expect(value.signedIn).toBe(false)
        expect(value.user).toBeNull()
        expect(value.status).toBe(Status.Failure)

        done()
      })
    })

    it('when signOut() is called', () => {
      const wrapper = mountProvider()

      wrapper.setState({
        signedIn: true,
        status: Status.Success,
        user: {}
      })

      getValue(wrapper, false).signOut()

      const value = getValue(wrapper)

      expectInitialValue(value)
    })
  })
})
