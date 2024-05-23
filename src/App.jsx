import FeatureFlagGlobalState from './components/featureFlags/context';
import FeatureFlags from './components/featureFlags/index';

function App() {

  return (
    <>
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </>
  )
}

export default App
